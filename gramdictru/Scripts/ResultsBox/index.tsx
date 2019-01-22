import { ApplicationState } from "../ApplicationState/index";
import * as InfinityScroll from "react-infinite-scroll-component";
import { observer } from "mobx-react";
import * as React from "react";
import styled from "styled-components";

export interface IResultBoxProps {
    applicationState: ApplicationState
}

const ResultsTable = styled.table`
    width: 100%;
`;

const Lemma = styled.td`
    text-align: left;
    min-width: 350px;
`;

const Symbol = styled.td`
    text-align: left;
    min-width: 350px;
`;

const Grammar = styled.td`
    text-align: left;
    min-width: 350px;
`;

@observer
export class ResultsBox extends React.Component<IResultBoxProps> {
    render() {
        return this.props.applicationState.hasSearched && <InfinityScroll
            dataLength={this.props.applicationState.results.length}
            next={() => this.props.applicationState.continue()}
            hasMore={!this.props.applicationState.reachedLimit}
            loader={<h4>Loading...</h4>}>
            <ResultsTable>
                <tbody>
                    {this.props.applicationState.results.map(r => <tr>
                        <Lemma>{r.lemma}</Lemma>
                        <Symbol>{r.symbol}</Symbol>
                        <Grammar>{r.grammar}</Grammar>
                    </tr>)}
                </tbody>
            </ResultsTable>
        </InfinityScroll>;
    }
}
