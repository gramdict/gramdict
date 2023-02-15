import { ApplicationState, text2Markdown } from "../ApplicationState/index";
import * as InfinityScroll from "react-infinite-scroll-component";
import { observer } from "mobx-react";
import * as React from "react";
import AnimateHeight from "react-animate-height";
import * as copy from 'copy-to-clipboard';
import { Filters } from "../Filters/index";

export interface IResultBoxProps {
    applicationState: ApplicationState
}

@observer
export class ResultsBox extends React.Component<IResultBoxProps> {
    loader: InfinityScroll;

    onCopy(e) {
        e.preventDefault();
        const selection = document.getSelection();
        if (selection) {
            let text2Copy="";
            this.props.applicationState.results.forEach((resultSet, index1) => {
                resultSet.forEach((r, index2) => {
                    var elm = document.getElementById(`result-entry-${index1}-${index2}`)
                    if (elm) {
                        var hasSelected = selection.containsNode(elm, true);
                        if (hasSelected) {
                            text2Copy += `__${text2Markdown(r.lemma)}__ ${r.symbol} ${text2Markdown(r.grammar)}` + "\n"
                        }
                    }
                })
            })
            if (text2Copy) {
                copy(text2Copy)
            }
        }
        
    }

    render() {
        return this.props.applicationState.hasSearched &&
            <div className="page is-searching" id="search-results" >
                <AnimateHeight className="static-filters"
                    duration={this.props.applicationState.nextAnimationTime}
                    height={this.props.applicationState.nextAnimationHeight}
                    onAnimationEnd={val => this.props.applicationState.ensureFilterAreClosed()}
                    style={{
                        backgroundImage: "url('../background.jpg')"
                    }}>
                    <Filters applicationState={this.props.applicationState} />
                </AnimateHeight>
                <div className="body-content" onCopy={this.onCopy.bind(this)}>
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
                            <div className={"results-table" + (this.props.applicationState.isShortResult ? " short-results" : "")}>
                                {resultSet.map((r, index2) => <div className="result-entry" id={`result-entry-${index1}-${index2}`}>
                                    <div className="lemma" style={{ textAlign: this.props.applicationState.searchTerm === "" || this.props.applicationState.searchTerm.startsWith('*') ? 'right' : 'left' }}>{r.lemma}</div>
                                    <div className="symbol" dangerouslySetInnerHTML={{ __html: r.symbol }} />
                                    <div className="grammar" dangerouslySetInnerHTML={{ __html: r.grammar }} />
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
