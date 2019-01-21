import * as React from "react";
import * as ReactDOM from "react-dom";

class MyComponent extends React.Component {
    render() {
        return <div>Hello World</div>;
    }
}

ReactDOM.render(<MyComponent />, document.getElementById("search-react-root"));