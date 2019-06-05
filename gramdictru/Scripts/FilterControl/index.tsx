import * as React from "react";
import { ApplicationState } from "../ApplicationState";
import { observer } from "mobx-react";

export interface IFilterControlProps
{
    applicationState: ApplicationState
}

@observer
export class FilterControl extends React.Component<IFilterControlProps> {
    render() {
        return <i className={"filter-control fas " +
            (this.props.applicationState.filtersAreOpen ? "fa-chevron-circle-up" : "fa-chevron-circle-down")}
            onClick={() => this.props.applicationState.toggleFilterControl()}>
        </i>;
    }
}