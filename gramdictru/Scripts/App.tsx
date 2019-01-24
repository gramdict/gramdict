import * as React from "react";
import * as ReactDOM from "react-dom";
import { reaction } from "mobx";
import { SearchBox } from "./SearchBox";
import { ResultsBox } from "./ResultsBox";
import { ApplicationState } from "./ApplicationState";
import styled from "styled-components";

const applicationState = new ApplicationState();

const reaction3 = reaction(
    () => applicationState.hasSearched,
    (count, reaction) => {
        console.log("Searching has happened, removing original page");
        const elements = document.getElementsByClassName("page-wrapper");
        for (var index = 0; index < elements.length; index++) {
            elements[index].remove();
        }
        reaction.dispose();
    }
);

const SearchBar = styled.div`
    background-color: blue;
    padding: 5px 0;
    font-size: larger;
    font-weight: bold;
`;

const Centerer = styled.div`
    max-width: 50rem;
    display: inline-block;
    width: calc(100% - 0.5rem);
    text-align: left;
    padding-left: 0.5rem;
`;

class MyComponent extends React.Component {
    render() {
        return <div>
            <SearchBar>
                <Centerer>
                    <SearchBox applicationState={applicationState} />
                    &nbsp;
                    <a href="/contents">Содержание</a>
                </Centerer>
            </SearchBar>
            <ResultsBox applicationState={applicationState} />
        </div>;
    }
}

ReactDOM.render(<MyComponent />, document.getElementById("search-react-root"));