import { ApplicationState } from "../ApplicationState/index";
import * as React from "react";
import { observer } from "mobx-react";

const Lists = [
    {
        key: "common",
        label: "нарицательные"
    },
    {
        key: "proper",
        label: "собственные"
    }
];

interface IListFilterProps
{
    applicationState: ApplicationState,
    list: string,
}

@observer
class Filter extends React.Component<IListFilterProps> {
    render() {
        return <span
                   className={"filter " + (this.props.applicationState.lists.get(this.props.list) ? "filter-active" : "filter-inactive")}
                   onClick={() => this.props.applicationState.toggleList(this.props.list)}>
                   {this.props.children}
               </span>;
    }
}

type ListFiltersProps = {
    applicationState: ApplicationState,
}

export class ListFilters extends React.PureComponent<ListFiltersProps> {
    render() {
        return <div className="list-filters">
            {Lists.map(l => <Filter applicationState={this.props.applicationState} list={l.key} key={l.key}>
                <span>{l.label}</span>
            </Filter>)}
        </div>;
    }
}