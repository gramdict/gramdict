import * as React from "react";
import * as ReactDOM from "react-dom";
import { reaction } from "mobx";
import { SearchBox } from "./SearchBox";
import { ResultsBox } from "./ResultsBox";
import { ApplicationState } from "./ApplicationState";
import { Loader } from "./Loader/index";
import { FilterControl } from "./FilterControl";
import { Filters } from "./Filters";
import { observer } from "mobx-react";
import AnimateHeight from "react-animate-height";

const applicationState = new ApplicationState();
const root = document.documentElement;

const initialTerm = window["term"];
const initialSymbol = window["symbol"];
const initialLists = window["lists"];

if (typeof initialTerm !== "undefined" && typeof initialSymbol !== "undefined" && typeof initialLists !== "undefined") {
    console.log("Loading with initial state", initialTerm, initialSymbol, initialLists);
    applicationState.applyState(initialTerm, initialSymbol, initialLists);
}

window.onpopstate = function (event) {
    if (event.state === null) {
        applicationState.resetSearch();
        resize();
        return;
    }

    const { term, filters, lists } = event.state;
    console.log(event.state);
    if (typeof term === "string" && typeof filters === "string" && typeof lists === "string") {
        applicationState.applyState(term, filters, lists);
    }
};

reaction(
    () => applicationState.filtersAreOpen,
    (open, reaction) => {
        if (open) {
            const current = document.getElementById("search-results").scrollTop;
            document.documentElement.style.setProperty("--scroll-position", current + "px");
        }
    });

reaction(
    () => applicationState.hasSearched,
    (_, reaction) => {
        console.log("Searching has happened, removing original page");
        const elements = document.getElementsByClassName("page");
        for (let index = 0; index < elements.length; index++) {
            const currentStyle = (elements[index] as any).style;
            const currentDisplay = currentStyle.display;
            currentStyle.display = (currentDisplay === "") ? "none" : "";
        }

        const root = document.getElementById("search-react-root");
        root.classList.add("has-searched");

        setTimeout(() => {
            let previous = 0;
            let closeTimeout = 0;
            let adjustTimeout = 0;
            const filters = document.getElementsByClassName("static-filters")[0];

            document.getElementById("search-results").addEventListener("scroll",
                () => {
                    const current = document.getElementById("search-results").scrollTop;
                    const last = previous;
                    previous = current;
                    const isFullyOpen = (filters as any).style.height == "auto";

                    const offset = current + "px";
                    if (isFullyOpen && current < last) {
                        document.documentElement.style.setProperty("--scroll-position", offset);
                    }

                    if (!isFullyOpen) {
                        document.documentElement.style.setProperty("--scroll-position", offset);
                    }

                    if (isFullyOpen) {
                        const currentFilterPosition =
                            parseInt(document.documentElement.style.getPropertyValue("--scroll-position")) || 0;
                        const diff = Math.abs(currentFilterPosition - current);
                        if (diff > 5) {
                            if (closeTimeout) {
                                clearTimeout(closeTimeout);
                            }

                            closeTimeout = window.setTimeout(() => {
                                    applicationState.closeFilterControl();
                                },
                                50);

                            return;
                        }

                        //setTimeout(() => , 0);
                    }
                });
        });
    }
);

function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

export function resize() {
    const elements = document.getElementsByClassName("page");
    const first: any = elements[0];
    if (!!first) {
        const toCenter = document.getElementsByClassName("centerer");
        for (let index = 0; index < toCenter.length; index++) {
            (toCenter[index] as any).style.width = `${first.offsetWidth}px`;
        }
    }
}

window.addEventListener('resize', debounce(resize, 20, false));

@observer
class MyComponent extends React.Component {
    render() {
        return [
            <div className="search-bar">
                <div className="search-bar-wrapper">
                    <div className="centerer">
                        <div className="search-controls">
                            <a className="contents-link" href="/contents"><i className="fas fa-bars"></i><span>Содержание</span></a>
                            <SearchBox applicationState={applicationState} />
                            {applicationState.hasSearched && <FilterControl applicationState={applicationState}/>}                        
                        </div>
                    </div>
                </div>
                <Loader applicationState={applicationState} />
            </div>,
            <ResultsBox applicationState={applicationState}/>
        ];
    }
}

ReactDOM.render(<MyComponent />, document.getElementById("search-react-root"));

setTimeout(resize, 0);