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
    getter: Map<string, boolean>,
    toggle: (something: string) => void,
}

@observer
class Filter extends React.Component<IFilterProps> {
    render() {
        return <span
            className={"filter " + (this.props.getter.get(this.props.filter) ? "filter-active" : "filter-inactive")}
            onClick={() => this.props.toggle(this.props.filter)}>
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
type Row = Array<Entry & { width?: number } | Nested | undefined>

const possibleFilters: Row[] = [
    [
        { name: "м", tooltip: "существительное мужского рода, неодушевленное", link: 0},
        { name: "мо", tooltip: "существительное мужского рода, одушевленное", link: 0},
        { name: "мо-жо", tooltip: "существительное мужского или женского рода, одушевленное", link: 0},
        { name: "мн.", tooltip: "существительное, имеющее только множественное число", link: 0 },
        { name: "союз", tooltip: "союз", link: 0 },
        { name: "ф.", tooltip: "фамилия", link: 5 },
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
        { name: "н", tooltip: "наречие", link: 0 },
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
const stresses: Row[] = [
    [
        { name: "a", tooltip: "Постоянное ударение на основе"},
        { name: "a'", tooltip: "Постоянное ударение на основе, но в кратких формах ж. (у прилагательных) возможно колебание."}
    ],
    [
        { name: "b", tooltip: "Постоянное ударение на окончании" },
        { name: "b'", tooltip: "(У существительных) как схема b, только в T. ед. ударение на основе.<br/>(У прилагательных) постоянное ударение на основе, но в кратких формах мн. ч. возможно колебание." }
    ],
    [
        { name: "c", tooltip: "(У существительных) в единственном ударение на основе, во множественном - на окончании. <br/>(У прилагательных и в прош.) на окончаниях в прош. ж, в прочих формах на основе." },
        { name: "c'", tooltip: "" },
        { name: "c''", tooltip: "" }
    ],
    [
        { name: "d", tooltip: "В единственном ударение на окончании, во множественном - на основе." },
        { name: "d'", tooltip: "Как схема d, только в В. ед. ударение на первом слоге." }
    ],
    [
        { name: "e", tooltip: "e" }
    ],
    [
        { name: "f", tooltip: "f" },
        { name: "f'", tooltip: "Как схема f, только в В. ед. ударение на первом слоге." },
        { name: "f''", tooltip: "f''" }
    ],
];

const indexes = [
    {
        name: "0",
        tooltip: "Неизменяемое (несклоняемое, неспрягаемое) слово"
    },
    {
        name: "1",
        tooltip: "1"
    },
    {
        name: "2",
        tooltip: "2"
    },
    {
        name: "3",
        tooltip: "3"
    },
    {
        name: "4",
        tooltip: "4"
    },
    {
        name: "5",
        tooltip: "5"
    },
    {
        name: "6",
        tooltip: "6"
    },
    {
        name: "7",
        tooltip: "7"
    },
    {
        name: "8",
        tooltip: "8"
    },
    {
        name: "9",
        tooltip: "9"
    },
    {
        name: "10",
        tooltip: "10"
    },
    {
        name: "11",
        tooltip: "11"
    },
    {
        name: "12",
        tooltip: "12"
    },
    {
        name: "13",
        tooltip: "13"
    },
    {
        name: "14",
        tooltip: "14"
    },
    {
        name: "15",
        tooltip: "15"
    },
    {
        name: "16",
        tooltip: "16"
    }
];

const circles: Row = [
    undefined,
    {
        name: "①",
        tooltip: "①"
    },
    {
        name: "②",
        tooltip: "②"
    },
    {
        name: "③",
        tooltip: "③"
    },
    {
        name: "④",
        tooltip: "④"
    },
    {
        name: "⑤",
        tooltip: "⑤"
    },
    {
        name: "⑥",
        tooltip: "⑥"
    },
    {
        name: "⑦",
        tooltip: "⑦"
    },
    {
        name: "⑧",
        tooltip: "⑧"
    },
    {
        name: "⑨",
        tooltip: "⑨"
    }
];

const additionals: Row[] = [
    [
        { name: "✕", tooltip: "Беглая гласная у имен и глаголов." },
        { name: "△", tooltip: "△" },
        { name: "◑", tooltip: "Сведения о глаголе противоположного вида." },//todo href
        { name: "ё", tooltip: "Чередование ё/е у имен и глаголов." },//todo href
        { name: "—", tooltip: "Форма множественного числа или (у прилагательных) краткая форма мужского рода предположительна." },
        { name: "Р2", tooltip: "Второй родительный падеж" },//lower index
    ],
    [
        { name: "☒", tooltip: "(У прилагательных) краткой формы мужского рода нет, образование прочих кратких форм затруднительно или (у глаголов) страдательного причастия прош. времени нет." },
        { name: "✧", tooltip: "✧ placeholder" },
        { name: "♠", tooltip: "♠ placeholder" },
        { name: "o", tooltip: "o placeholder" },
        { name: "~", tooltip: "~ placeholder" },
        { name: "П2", tooltip: "Второй предложный падеж" },//lower index
    ],
    [
        { name: "÷", tooltip: "÷ placeholder" },
        { name: "*", tooltip: "Беглая гласная у имен и глаголов." },//todo href
        { name: "°", tooltip: "Чередования у имен и глаголов." },//todo href
    ],
];

const para: Row[] = [
    [
        undefined,
        undefined, 
        {
            name: "§3",
            tooltip: "§3"
        },
        {
            name: "§4",
            tooltip: "§4"
        },
        {
            name: "§5",
            tooltip: "§5"
        },
        {
            name: "§6",
            tooltip: "§6"
        },
        {
            name: "§7",
            tooltip: "§7"
        },
        {
            name: "§8",
            tooltip: "§8"
        },
        {
            name: "§9",
            tooltip: "§9"
        },
        {
            name: "§10",
            tooltip: "§10"
        }
    ],
    [
        {
            name: "§11",
            tooltip: "§11"
        },
        {
            name: "§12",
            tooltip: "§12"
        },
        {
            name: "§13",
            tooltip: "§13"
        },
        {
            name: "§14",
            tooltip: "§14"
        },
        {
            name: "§15",
            tooltip: "§15"
        },
        {
            name: "§16",
            tooltip: "§16"
        },
        {
            name: "§17",
            tooltip: "§17"
        },
        {
            name: "§18",
            tooltip: "§18"
        },
        {
            name: "§19",
            tooltip: "§19"
        },
        {
            name: "§20",
            tooltip: "§20"
        }
    ],
    [
        {
            name: "§21",
            tooltip: "§21"
        },
        {
            name: "§22",
            tooltip: "§22"
        },
        {
            name: "§23",
            tooltip: "§23"
        },
        {
            name: "§24",
            tooltip: "§24"
        },
        {
            name: "§25",
            tooltip: "§25"
        },
        {
            name: "§26",
            tooltip: "§26"
        },
        {
            name: "§27",
            tooltip: "§27"
        },
        {
            name: "§28",
            tooltip: "§28"
        },
        {
            name: "§29",
            tooltip: "§29"
        },
        {
            name: "§30",
            tooltip: "§30"
        }
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
};

const FilterTableRows = ({ rows, getter, toggle, className }: {
    rows: Row[],
    getter: Map<string, boolean>,
    toggle: (something: string) => void,
    className?: string
}) => (<React.Fragment>{rows.map(row =>
    <tr className={className}>
        {row && row.map(item => {
            let width = 1;
            let items: Entry[];
            if (Array.isArray(item)) {
                items = item;
            } else if (item === undefined) {
                items = [];
            } else {
                width = item.width;
                items = [item];
            }

            const filters = items
                .map((entry, i) =>
                    <React.Fragment>
                        <Filter filter={entry.name} getter={getter} toggle={toggle}>
                            {formatLabel(entry)}
                        </Filter>
                        {i < items.length - 1 ? " " : ""}
                    </React.Fragment>);

            return <td colSpan={width}>{filters}</td>;
        })}
           </tr>)}</React.Fragment>);
    
const FilterTable = ({ children }: { children?: React.ReactNode }) =>
(<table className="filter-table">
        <tbody>
            {children}
        </tbody>
    </table>);

const ExtraTable = ({ children }: { children?: React.ReactNode }) =>
    (<table className="filter-table extra-table">
     <tbody>
     {children}
     </tbody>
 </table>);

@observer
export class Filters extends React.Component<IFilterControlProps> {
    render() {
        return <div className="filter-wrapper">
                   <div className="scrollable-filters">
                       <FilterTable>
                           <FilterTableRows rows={possibleFilters} getter={this.props.applicationState.filters} toggle={f => this.props.applicationState.toggleFilter(f)}/>
                       </FilterTable>
                       <FilterTable>
                           <FilterTableRows rows={additionals} getter={this.props.applicationState.additionals} toggle={a => this.props.applicationState.toggleAdditional((a))} />
                       </FilterTable>
                       <FilterTable>
                           <FilterTableRows rows={stresses} getter={this.props.applicationState.stresses} toggle={s => this.props.applicationState.toggleStress((s))} />
                       </FilterTable>
                       <ExtraTable>
                           <tr>
                               <td colSpan={10}>
                                   <div className="filter-indexes">
                                       {indexes.map(i =>
                                           <Filter filter={i.name} getter={this.props.applicationState.indexes} toggle={
index => this.props.applicationState.toggleIndex(index)}>
                                               {formatLabel(i)}
                                           </Filter>)}
                                   </div></td>
                           </tr>
                           <FilterTableRows className="circle-row" rows={[circles]} getter={this.props.applicationState.circles} toggle={c =>
                               this.props.applicationState.toggleCircle((c))}/>
                           <FilterTableRows rows={para} getter={this.props.applicationState.paras} toggle={p => this
                               .props.applicationState.togglePara((p))}/>
                       </ExtraTable>

                       <div className="list-filters-wrapper">
                           <ListFilters applicationState={this.props.applicationState}/>
                       </div>
                   </div>
                   <div className="filter-controls-area">
                       <div className="reset-filter-button-wrapper">
                           <span className="reset-filter-button" onClick={() => this.props.applicationState
                               .resetFilters()}>Reset</span>
                       </div>
                       {this.props.applicationState.filterTotals}
                   </div>
               </div>;
    }
}




