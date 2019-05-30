import * as React from "react";
import { ApplicationState } from "../ApplicationState";
import { observer } from "mobx-react";

export interface ILoaderProps
{
    applicationState: ApplicationState
}

@observer
export class Loader extends React.Component<ILoaderProps> {
    render() {
        if (this.props.applicationState.isLoading) {
            return <div className="loading-bar">
                <div>
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
            </div>;
        }

        if (this.props.applicationState.hasError) {
            return <div className="error-bar">
                There was an error contacting the API: <a href="#" onClick={(e) => {
                    e.preventDefault();
                    this.props.applicationState.continue();
                }}>retry?</a>
                   </div>;
        }

         return <div className="search-bar-padding" />;

    }
}