import * as React from "react";
import { ApplicationState} from "../ApplicationState";
import { observer } from  "mobx-react";

export interface IFilterControlProps
{
    applicationState: ApplicationState
}

@observer
export class FilterControl extends React.Component<IFilterControlProps> {
    render() {
        return <div className={"filter-control " +
            (this.props.applicationState.filtersAreOpen ? "filter-control-open" : "filter-control-close")} 
            onClick={() => this.props.applicationState.toggleFilterControl()}>
        </div>;
    }
}
