import * as React from "react";
import { ApplicationState } from "../ApplicationState";
import { observer } from "mobx-react";
import { DebounceInput } from 'react-debounce-input';

export interface ISearchBoxProps
{
    applicationState: ApplicationState
}

@observer
export class SearchBox extends React.Component<ISearchBoxProps> {
    render() {
        return <DebounceInput
            type="text"
            minLength={2}
            debounceTimeout={300}
            onChange={e => this.onChange(e)}
            value={this.props.applicationState.searchTerm}
            placeholder="Поиск" />;
    }

    onChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.props.applicationState.updateSearchTerm(e.target.value);
    }
}