import { ApplicationState } from "../ApplicationState/index";
import * as InfinityScroll from "react-infinite-scroll-component";
import { observer } from "mobx-react";
import * as React from "react";

export interface IResultBoxProps {
    applicationState: ApplicationState
}

@observer
export class ResultsBox extends React.Component<IResultBoxProps> {
    loader: InfinityScroll;

    render() {
        return this.props.applicationState.hasSearched &&
            <div className="page">
                <div className="body-content">
                    <InfinityScroll
                        dataLength={this.props.applicationState.total}
                        next={() => this.props.applicationState.continue()}
                        hasMore={!this.props.applicationState.reachedLimit}
                        loader={<h4>Loading...</h4>}
                        ref={c => this.loader = c}>
                        {this.props.applicationState.results.map(resultSet => [
                            <div className="results-table">
                                {resultSet.map(r => <div className="result-entry">
                        <div className="lemma">{r.lemma}</div>
                        <div className="symbol">{r.symbol}</div>
                        <div className="grammar">{r.grammar}</div>
                    </div>)}
                            </div>,
                            <hr/>
                        ])}
                        {this.props.applicationState.canLoadMore &&
                            <a href="javascript:void(0)" onClick={() => {
                                this.props.applicationState.continue();
                                this.loader.setState({
                                    showLoader: true,
                                });
                            }}>Load more...</a>}
                    </InfinityScroll>
                </div>
            </div>;
    }
}
