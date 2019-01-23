import { ApplicationState } from "../ApplicationState/index";
import * as InfinityScroll from "react-infinite-scroll-component";
import { observer } from "mobx-react";
import * as React from "react";
import styled from "styled-components";

export interface IResultBoxProps {
    applicationState: ApplicationState
}

const ResultsTable = styled.div`
    width: 100%;
    column-count: 6;
    column-width: 350px;
`;

const ResultEntry = styled.div`
    display: flex;
`;

const Lemma = styled.div`
    width: 45%;
    word-break: break-all;
    text-align: right;
    display: flex;
    align-self: center;
    flex-direction: column;
`;

const Symbol = styled.div`
    width: 25%;
    text-align: center;
    display: flex;
    align-self: center;
    flex-direction: column;
`;

const Grammar = styled.div`
    width: 30%;
    text-align: left;
    word-break: break-all;
    display: flex;
    align-self: center;
    flex-direction: column;
`;

@observer
export class ResultsBox extends React.Component<IResultBoxProps> {
    loader: InfinityScroll;

    render() {
        return this.props.applicationState.hasSearched && <InfinityScroll
            dataLength={this.props.applicationState.total}
            next={() => this.props.applicationState.continue()}
            hasMore={!this.props.applicationState.reachedLimit}
            loader={<h4>Loading...</h4>}
            ref={c => this.loader = c}>
            {this.props.applicationState.results.map(resultSet => [
                <ResultsTable>
                    {resultSet.map(r => <ResultEntry>
                        <Lemma>{r.lemma}</Lemma>
                        <Symbol>{r.symbol}</Symbol>
                        <Grammar>{r.grammar}</Grammar>
                    </ResultEntry>)}
                </ResultsTable>,
                <hr />
            ])}
            {this.props.applicationState.canLoadMore && <a href="javascript:void(0)" onClick={() => {
                this.props.applicationState.continue();
                this.loader.setState({
                    showLoader: true,
                });
            }}>Load more...</a>}
        </InfinityScroll>;
    }
}