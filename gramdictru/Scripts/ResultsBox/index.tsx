import { ApplicationState } from "../ApplicationState/index";
import * as InfinityScroll from "react-infinite-scroll-component";
import { observer } from "mobx-react";
import * as React from "react";
import AnimateHeight from "react-animate-height";
import { Filters } from "../Filters/index";

export interface IResultBoxProps {
    applicationState: ApplicationState
}

@observer
export class ResultsBox extends React.Component<IResultBoxProps> {
    loader: InfinityScroll;

    render() {
        return this.props.applicationState.hasSearched &&
            <div className="page is-searching" id="search-results">
                <AnimateHeight className="static-filters"
                    duration={this.props.applicationState.nextAnimationTime}
                    height={this.props.applicationState.nextAnimationHeight}
                    onAnimationEnd={val => this.props.applicationState.ensureFilterAreClosed()}
                    style={{
                        backgroundImage: "url('../background.jpg')"
                    }}>
                    <Filters applicationState={this.props.applicationState} />
                </AnimateHeight>
                <div className="body-content">
                    <InfinityScroll
                        dataLength={this.props.applicationState.total}
                        next={() => this.props.applicationState.continue()}
                        hasMore={!this.props.applicationState.reachedLimit}
                        loader={<h4>Loading...</h4>}
                        ref={c => this.loader = c}
                        scrollThreshold="50px"
                        scrollableTarget="search-results"
                        style={{
                            overflow: "hidden"
                        }}
                        key={this.props.applicationState.searchedTerm}>
                        {this.props.applicationState.results.map((resultSet, index1) => [
                            <div className={"results-table" + (this.props.applicationState.isShortResult ? " short-results" : "")} key={index1}>
                                {resultSet.map((r, index2) => <div className="result-entry" key={index2}>
                                    <div className="lemma" style={{ textAlign: this.props.applicationState.searchTerm === "" || this.props.applicationState.searchTerm.startsWith('*') ? 'right' : 'left' }}>
                                        <label className='entry-hidden'>__</label>
                                        {r.lemma}
                                        <label className='entry-hidden'>__&nbsp;</label>
                                    </div>
                                    <div className="symbol" dangerouslySetInnerHTML={{ __html: r.symbol }} />
                                    <div className="grammar"  >
                                        <label className='entry-hidden'>&nbsp;</label>
                                        <span dangerouslySetInnerHTML={{ __html: r.grammar }} />
                                    </div>
                                </div>)}
                            </div>,
                            <hr />
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
