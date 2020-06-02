import { ApplicationState } from "../ApplicationState/index";
import * as React from "react";
import { observer } from "mobx-react";
import { Row, FilterTable, FilterTableRows } from "../Filters/index";

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

const additionals: Row[] = [
    [
        { name: "✕", tooltip: "Образование кратких форм прилагательного или образование страдательного причастия прош. времени затруднительно." },
        { name: "△", tooltip: "△ placeholder" },
        { name: "◑", tooltip: "<a href=\"/conjugation/symbols2#aspect\">Сведения о глаголе противоположного вида.</a>" },
        { name: "ё", tooltip: "Чередование ё/е у <a href=\"/declension/symbols#yo\">имен</a> и <a href=\"/conjugation#verb-yo\">глаголов</a>." },
        { name: "—", tooltip: "Форма множественного числа или (у прилагательных) краткая форма мужского рода предположительна." },
        { name: "Р<sub>2</sub>", tooltip: "Второй родительный падеж" },//lower index
    ],
    [
        { name: "☒", tooltip: "(У прилагательных) краткой формы мужского рода нет, образование прочих кратких форм затруднительно или (у глаголов) страдательного причастия прош. времени нет." },
        { name: "✧", tooltip: "✧ placeholder" },
        { name: "♠", tooltip: "♠ placeholder" },
        { name: "о", tooltip: "Чередование о/е у <a href=\"/conjugation#verb-yo\">глаголов</a>." },
        { name: "~", tooltip: "~ placeholder" },
        { name: "П<sub>2</sub>", tooltip: "Второй предложный падеж" },//lower index
    ],
    [
        { name: "÷", tooltip: "÷ placeholder" },
        { name: "*", tooltip: "Беглая гласная у <a href=\"/declension/symbols#star\">имен</a> и <a href=\"/conjugation#star\">глаголов</a>." },
        { name: "°", tooltip: "Чередования у <a href=\"/declension/symbols#superscript-circle\">имен</a> и <a href=\"/conjugation#superscript-circle\">глаголов</a>." },//todo href
    ],
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
                <FilterTable><div className="additional-small-padding">
                <FilterTableRows rows={additionals} getter={this.props.applicationState.additionals} toggle={a => this.props.applicationState.toggleAdditional((a))} />
                </div></FilterTable>
            </tbody>
        </table>;
    }
}