﻿import * as React from "react";
import * as ReactDOM from "react-dom";
import { SearchBox } from "./SearchBox";
import { ResultsBox } from "./ResultsBox";
import { ApplicationState } from "./ApplicationState";

const applicationState = new ApplicationState();

class MyComponent extends React.Component {
    render() {
        return <div>
            <div>
                <SearchBox applicationState={applicationState} />
                &nbsp;
                <a href="/contents">Содержание</a>
            </div>
            <ResultsBox applicationState={applicationState} />
        </div>;
    }
}

ReactDOM.render(<MyComponent />, document.getElementById("search-react-root"));