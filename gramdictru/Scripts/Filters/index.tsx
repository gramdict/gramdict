﻿import * as React from "react";
import { ApplicationState } from "../ApplicationState";
import { observer } from "mobx-react";

export interface IFilterControlProps
{
    applicationState: ApplicationState
}

interface IFilterProps {
    filter: string,
}

@observer
class Filter extends React.Component<IFilterControlProps & IFilterProps> {
    render() {
        return <td
            className={"filter " + (this.props.applicationState.filters.get(this.props.filter) ? "filter-active" : "filter-inactive")}
            onClick={() => this.props.applicationState.toggleFilter(this.props.filter)}>
            {this.props.children}
        </td>;
    }
}

const possibleFilters = [
    ["м", "мо", "мо-жо", "союз"],
    ["ж", "жо", "мн.", "межд."],
    ["с", "со", "мн. <i>от</i>", "предл."],
    ["н", "мс", "числ.", "предик."],
    ["п", "мс-п", "числ.-п", "част."],
    ["св", "нсв", "св-нсв"],
];

const formatLabel = (filter: string) => {
    return <span dangerouslySetInnerHTML={{ __html: filter }} />;
}

@observer
export class Filters extends React.Component<IFilterControlProps> {
    render() {
        return [
            <table className="filter-table">
                <tbody>
                {possibleFilters.map(row => <tr>{row.map(f => <Filter filter={f} applicationState={this.props.applicationState}>
                    {formatLabel(f)}
                </Filter>)}</tr>)}
               </tbody>
            </table>,
            <div className="reset-filter-button" onClick={() => this.props.applicationState.resetFilters()}>Reset</div>];
    }
}
