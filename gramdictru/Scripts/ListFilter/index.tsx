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
        return <table className="filter-table list-filters">
            <tbody>
                   {Lists.map(l => 
                <tr key={l.key}>
                    <td>
                        <Filter applicationState={this.props.applicationState} list={l.key}>
                            <span>{l.label}</span>
                        </Filter>
                    </td>
                </tr>)}
            </tbody>
        </table>;
    }
}