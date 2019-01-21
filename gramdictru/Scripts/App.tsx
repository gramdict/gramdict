import * as React from "react";
import * as ReactDOM from "react-dom";
import { SearchBox } from "./SearchBox";
import { ApplicationState } from "./ApplicationState";

const applicationState = new ApplicationState();

class MyComponent extends React.Component {
    render() {
        return <SearchBox applicationState={applicationState} />;
    }
}

ReactDOM.render(<MyComponent />, document.getElementById("search-react-root"));