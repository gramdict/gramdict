import * as React from "react";
import ReactTooltip from "react-tooltip";
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

const possibleFilters: { name: string, tooltip: string, link: number }[][] = [
    [
        { name: "м", tooltip: "существительное мужского рода, неодушевленное", link: 0},
        { name: "мо", tooltip: "существительное мужского рода, одушевленное", link: 0},
        { name: "мо-жо", tooltip: "существительное мужского или женского рода, одушевленное", link: 0},
        { name: "союз", tooltip: "союз", link: 0}
    ],[
        { name: "ж", tooltip: "существительное женского рода, неодушевленное", link: 0},
        { name: "жо", tooltip: "существительное женского рода, одушевленное", link: 0},
        { name: "мн.", tooltip: "существительное, имеющее только множественное число", link: 0},
        { name: "межд.", tooltip: "междометие", link: 0}
    ],[
        { name: "с", tooltip: "существительное среднего рода, неодушевленное", link: 0},
        { name: "со", tooltip: "существительное среднего рода, одушевленное", link: 0},
        { name: "мн. <i>от</i>", tooltip: "существительное, имеющее только множественное число, образованное от обычного существительного", link: 0},
        { name: "предл.", tooltip: "предлог", link: 0}
    ],[
        { name: "н", tooltip: "наречие", link: 0},
        { name: "мс", tooltip: "местоимение", link: 0},
        { name: "числ.", tooltip: "числительное", link: 0},
        { name: "предик.", tooltip: "предикатив", link: 0}
    ],[
        { name: "п", tooltip: "прилагательное", link:0},
        { name: "мс-п", tooltip: "местоимение-прилагательное", link: 0},
        { name: "числ.-п", tooltip: "порядковое числительное", link: 0},
        { name: "част.", tooltip: "частица", link: 0}
    ],[
        { name: "св", tooltip: "глагол совершенного вида", link: 1},
        { name: "нсв", tooltip: "глагол несовершенного вида", link: 1},
        { name: "св-нсв", tooltip: "двувидовой глагол", link: 1}
    ]
];

const linksToAgenda = [
    ['(буквенные символы)','/declension/symbols#main-symbol'],
    ['(буквенные символы глаголов)','/conjugation#verb-symbol']
];

const formatLabelPart = (filter) => {
    return <span data-tip={filter.tooltip} data-for={filter.name} dangerouslySetInnerHTML={{ __html: filter.name }}/>;
};

const formatLabel = (filter) => {
    return [formatLabelPart(filter),
        <ReactTooltip
            delayShow={600}
            delayHide={200}
            type="light"
            effect="solid"
            id={filter.name}
            border={true}
            clickable={true}
            getContent={(dataTip) =>
            [
                <div className="tooltipClass">
                    <span className="tooltipClass">{dataTip}&nbsp;</span>
                    <br/>
                    <a href={linksToAgenda[filter.link][1]}>{linksToAgenda[filter.link][0]}</a>
                </div>
        ]} />
    ];
}


@observer
export class Filters extends React.Component<IFilterControlProps> {
    render() {
        return [
            <table className="filter-table">
                <tbody>
                    {possibleFilters.map(row => <tr>{row.map(item => <Filter filter={item.name} applicationState={this.props.applicationState}>
                    {formatLabel(item)}
                </Filter>)}</tr>)}
               </tbody>
            </table>,
            <div className="reset-filter-button" onClick={() => this.props.applicationState.resetFilters()}>Reset</div>];
    }
}



