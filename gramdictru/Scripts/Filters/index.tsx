import * as React from "react";
import ReactTooltip from "react-tooltip";
import { ApplicationState } from "../ApplicationState";
import { observer } from "mobx-react";
import { ListFilters } from "../ListFilter/index";

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
        return <span
            className={"filter " + (this.props.applicationState.filters.get(this.props.filter) ? "filter-active" : "filter-inactive")}
            onClick={() => this.props.applicationState.toggleFilter(this.props.filter)}>
            {this.props.children}
        </span>;
    }
}

type Entry = {
    name: string,
    tooltip: string,
    link?: number,
}

type Nested = Entry[];
type Row = Array<Entry & { width?: number } | Nested>

const possibleFilters: Row[] = [
    [
        { name: "м", tooltip: "существительное мужского рода, неодушевленное", link: 0},
        { name: "мо", tooltip: "существительное мужского рода, одушевленное", link: 0},
        { name: "мо-жо", tooltip: "существительное мужского или женского рода, одушевленное", link: 0},
        { name: "мн.", tooltip: "существительное, имеющее только множественное число", link: 0 },
        { name: "союз", tooltip: "союз", link: 0 },
        { name: "н", tooltip: "наречие", link: 0 },
    ],[
        { name: "ж", tooltip: "существительное женского рода, неодушевленное", link: 0},
        { name: "жо", tooltip: "существительное женского рода, одушевленное", link: 0},
        [
            { name: "мо⁺", tooltip: "мужское имя, изредка может быть женским", link: 2 }, 
            { name: "жо⁺", tooltip: "женское имя, изредка может быть мужским", link: 2 }
        ],
        { name: "мн. <i>от</i>", tooltip: "существительное, имеющее только множественное число, образованное от обычного существительного", link: 0 },
        { name: "предл.", tooltip: "предлог", link: 0 },
        { name: "<i>см.</i>", tooltip: "ссылочная статья" }
    ],[
        { name: "с", tooltip: "существительное среднего рода, неодушевленное", link: 0},
        { name: "со", tooltip: "существительное среднего рода, одушевленное", link: 0 },
        [
            { name: "§1", tooltip: "слова типа <b>полдела</b>", link: 3 }, 
            { name: "§2", tooltip: "слова типа <b>полвторого</b>", link: 4 }
        ],
        { name: "мн. одуш.", tooltip: "одушевленное существительное, имеющее только множественное число", link: 0 },
        { name: "сравн.", tooltip: "сравнительная степень", link: 0 },
        { name: "<i>Р. мн.</i>", tooltip: "форма родительного падежа множественного числа" }
    ],[
        { name: "ф.", tooltip: "фамилия", link: 5 },
        { name: "мс", tooltip: "местоимение", link: 0},
        { name: "числ.", tooltip: "числительное", link: 0 },
        { name: "мн. неод.", tooltip: "неодушевленное существительное, имеющее только множественное число", link: 0 },
        { name: "вводн.", tooltip: "вводное слово", link: 0 },
        { name: "част.", tooltip: "частица", link: 0 }
    ],[
        { name: "п", tooltip: "прилагательное", link:0},
        { name: "мс-п", tooltip: "местоимение-прилагательное", link: 0},
        { name: "числ.-п", tooltip: "порядковое числительное", link: 0 },
        { name: "предик.", tooltip: "предикатив", link: 0 },
        { name: "межд.", tooltip: "междометие", link: 0 },
        { name: "<i>(нет)</i>", tooltip: "нет буквенного символа" }
    ],[
        { name: "св", tooltip: "глагол совершенного вида", link: 1},
        { name: "нсв", tooltip: "глагол несовершенного вида", link: 1},
        { name: "св-нсв", tooltip: "двувидовой глагол", link: 1 },
        { name: "предикативное мс", tooltip: "предикативное местоимение", link: 0, width: 3 }
    ]
];

const linksToAgenda = [
    ['(буквенные символы)','/declension/symbols#main-symbol'],
    ['(буквенные символы глаголов)', '/conjugation#verb-symbol'],
    ['(символ ⁺)', '/names#sup-plus'],
    ['(§1)', '/declension/paragraphs#para1'],
    ['(§2)', '/declension/paragraphs#para2'],
    ['(символ ф.)', '/names#symbol-f']
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
            isCapture={true}
            globalEventOff="click"
            getContent={(dataTip) =>
        [
            <div className="tooltip-clickable-wrapper" onClick={(event) => {
                event.stopPropagation();
            }}>
                <div className="tooltipClass">
                    <span className="tooltipClass" dangerouslySetInnerHTML={{ __html: `${dataTip}&nbsp;` }}></span>
                    {typeof filter.link == "number" &&
                        <React.Fragment>
                            <br/>
                            <a target="_blank" href={linksToAgenda[filter.link][1]}>{linksToAgenda[filter.link][0]}</a>
                        </React.Fragment>}
                </div>
            </div>
        ]}/>
    ];
}


@observer
export class Filters extends React.Component<IFilterControlProps> {
    render() {
        return <div className="filter-wrapper">
                   <table className="filter-table">
                       <tbody>
                       {possibleFilters.map(row =>
                           <tr>
                               {row.map(item => {
                                   let width = 1;
                                   let items: Entry[];
                                   if (Array.isArray(item)) {
                                       items = item;
                                   } else {
                                       width = item.width;
                                       items = [item];
                                   }

                                   const filters = items
                                       .map((entry, i) =>
                                           <React.Fragment>
                                               <Filter filter={entry.name} applicationState={this.props
                                                   .applicationState}>
                                                   {formatLabel(entry)}
                                               </Filter>
                                               {i < items.length - 1 ? " " : "" }
                                           </React.Fragment>);

                                   return <td colSpan={width}>{filters}</td>;
                               })}
                           </tr>)}
                       </tbody>
                   </table>
            <div className="lists-and-reset">
                <ListFilters applicationState={this.props.applicationState} />
                <div className="reset-filter-button" onClick={() => this.props.applicationState.resetFilters()}>Reset</div>
            </div>
            <div className="filter-totals">{this.props.applicationState.filterTotals}</div>
        </div>;
    }
}




