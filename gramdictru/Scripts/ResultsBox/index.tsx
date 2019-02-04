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
        if (this.loader && this.loader.state.actionTriggered && !this.props.applicationState.isLoading) {
            setTimeout(() => {
                    console.log("had to manually reset infinite scroll component");
                    this.loader.setState({
                        actionTriggered: false,
                        showLoader: false,
                    });
                },
                0);
        }

        return this.props.applicationState.hasSearched &&
            <div className="page is-searching">
                <div className="body-content">
                    <InfinityScroll
                        dataLength={this.props.applicationState.total}
                        next={() => this.props.applicationState.continue()}
                        hasMore={!this.props.applicationState.reachedLimit}
                        loader={<h4>Loading...</h4>}
                        ref={c => this.loader = c}
                        scrollThreshold="0px">
                        {this.props.applicationState.results.map(resultSet => [
                            <div className="results-table">
                                {resultSet.map(r => <div className="result-entry">
                        <div className="lemma" style={{textAlign: this.props.applicationState.searchTerm === "" || this.props.applicationState.searchTerm.startsWith('*') ? 'right' : 'left'}}>{r.lemma}</div>
                        <div className="symbol">{r.symbol}</div>
                        <div className="grammar">{r.grammar}</div>
                    </div>)}
                            </div>,
                            <hr/>
                        ])}
                    {this.props.applicationState.canLoadMore &&
                        <div className="load-more">
                            <a href="javascript:void(0)" onClick={() => {
                                this.props.applicationState.continue();
                                this.loader.setState({
                                    showLoader: true,
                                });
                        }}>Load more...</a>
                        </div>}
                    </InfinityScroll>
                </div>
            </div>;
    }
}
