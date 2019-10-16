import * as React from "react";
import * as ReactDOM from "react-dom";
import { reaction } from "mobx";
import { SearchBox } from "./SearchBox";
import { ResultsBox } from "./ResultsBox";
import { ApplicationState, defaultAnimationTime } from "./ApplicationState";
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
const initialIndexes = window["index"];
const initialStresses = window["stress"];
const initialCircles = window["circle"];
const initialParas = window["para"];

if (typeof initialTerm !== "undefined" && typeof initialSymbol !== "undefined" && typeof initialLists !== "undefined" && typeof initialIndexes !== "undefined" && typeof initialStresses !== "undefined" && typeof initialCircles !== "undefined" && typeof initialParas !== "undefined") {
    console.log("Loading with initial state", initialTerm, initialSymbol, initialLists);
    applicationState.applyState(initialTerm, initialSymbol, initialLists, initialIndexes, initialStresses, initialCircles, initialParas);
}

window.onpopstate = function (event) {
    if (event.state === null) {
        applicationState.resetSearch();
        resize();
        return;
    }

    const { term, symbol, list, index, stress, circle, para } = event.state;
    console.log("Should update state", event.state);
    if (typeof term === "string" && typeof symbol === "string" && typeof list === "string" && typeof index === "string" && typeof stress === "string" && typeof circle === "string" && typeof para === "string") {
        console.log("will update")
        applicationState.applyState(term, symbol, list, index, stress, circle, para);
    }
};

let hasBegunAnimating = false;

reaction(
    () => applicationState.filtersAreOpen,
    (open, reaction) => {
        if (open) {
            const searchResults = document.getElementById("search-results");
            searchResults.classList.remove("scrolling-down");
            searchResults.classList.add("scrolling-up");
            searchResults.classList.remove("filters-invisible");
            hasBegunAnimating = false;
        }
    });

reaction(
    () => applicationState.hasSearched,
    (value, reaction) => {
        if (!value) {
            return;
        }

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
            let isTouching = false;
            const filters = document.getElementsByClassName("static-filters")[0];
            const searchResults = document.getElementById("search-results");

            function updateFiltersAfterMoving() {
                if (applicationState.filtersAreOpen) {
                    const current = searchResults.scrollTop;
                    const goingUp = current <= previous;
                    const goingDown = current >= previous;

                    const currentFilterPosition =
                        parseInt(document.documentElement.style.getPropertyValue("--scroll-position")) || 0;
                    const filterHeight = (filters as any).offsetHeight;
                    const pixelsDownFilter = current - currentFilterPosition;
                    const percentageThrough = (pixelsDownFilter / filterHeight) * 100;
                    const isAtTop = percentageThrough <= 0;

                    if (goingUp) {
                        if (isAtTop) {
                            searchResults.classList.remove("scrolling-down");
                            searchResults.classList.add("scrolling-up");
                        }
                    } else {
                        if (!searchResults.classList.contains("scrolling-down")) {
                            const offset = current + "px";
                            document.documentElement.style.setProperty("--scroll-position", offset);
                        }

                        searchResults.classList.add("scrolling-down");
                        searchResults.classList.remove("scrolling-up");

                    }

                    if (goingDown) {
                        if (percentageThrough >= 10 && !hasBegunAnimating && !isTouching) {
                            if (closeTimeout) {
                                clearTimeout(closeTimeout);
                            }

                            closeTimeout = window.setTimeout(() => {
                                    hasBegunAnimating = true;
                                    const isWithinBounds = 0 <= percentageThrough && percentageThrough < 100;
                                    if (isWithinBounds) {
                                        const multiplier = percentageThrough / 100;
                                        applicationState.closeFilterControl(
                                            (filters as any).offsetHeight * multiplier,
                                            defaultAnimationTime * (1 - multiplier)
                                        );
                                    } else {
                                        applicationState.closeFilterControl();
                                    }
                                },
                                100);
                        }
                    }

                    const completelyCovered = percentageThrough >= 100;
                    if (completelyCovered) {
                        searchResults.classList.add("filters-invisible");
                    } else {
                        searchResults.classList.remove("filters-invisible");
                    }

                    previous = current;
                }
            }

            searchResults.addEventListener("touchstart", () => {
                isTouching = true;
            }, { passive: true });
            searchResults.addEventListener("touchend", () => {
                isTouching = false;
                updateFiltersAfterMoving();
            }, { passive: true });
            searchResults.addEventListener("mousedown", () => {
                isTouching = true;
            }, { passive: true });
            searchResults.addEventListener("mouseup", () => {
                isTouching = false;
                updateFiltersAfterMoving();
            }, { passive: true });
            searchResults.addEventListener("touchcancel", () => {
                isTouching = false;
                updateFiltersAfterMoving();
            }, { passive: true });
            searchResults.addEventListener("scroll", () => updateFiltersAfterMoving(), { passive: true });
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