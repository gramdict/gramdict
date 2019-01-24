import * as React from "react";
import * as ReactDOM from "react-dom";
import { reaction } from "mobx";
import { SearchBox } from "./SearchBox";
import { ResultsBox } from "./ResultsBox";
import { ApplicationState } from "./ApplicationState";
import styled from "styled-components";

const applicationState = new ApplicationState();

reaction(
    () => applicationState.hasSearched,
    (_, reaction) => {
        console.log("Searching has happened, removing original page");
        const elements = document.getElementsByClassName("page-wrapper");
        for (let index = 0; index < elements.length; index++) {
            elements[index].remove();
        }
        reaction.dispose();
    }
);

const SearchBar = styled.div`
    background-color: blue;
    padding: 0.5rem 0;
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

const ContentsLink = styled.a`
    color: white;
`;

class MyComponent extends React.Component {
    render() {
        return <div>
            <SearchBar>
                <Centerer>
                    <SearchBox applicationState={applicationState} />
                    &nbsp;
                    <ContentsLink href="/contents">Содержание</ContentsLink>
                </Centerer>
            </SearchBar>
            <ResultsBox applicationState={applicationState} />
        </div>;
    }
}

ReactDOM.render(<MyComponent />, document.getElementById("search-react-root"));