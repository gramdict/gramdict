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
                        hasMore={false}
                        loader={<h4>Loading...</h4>}
                        ref={c => this.loader = c}
                        scrollThreshold="50px"
                        scrollableTarget="search-results"
                        style={{
                            overflow: "hidden"
                        }}
                        key={this.props.applicationState.searchedTerm}>
                        {this.props.applicationState.results.map(resultSet => [
                            <div className={"results-table" + (this.props.applicationState.isShortResult ? " short-results" : "")}>
                                {resultSet.map(r => <div className="result-entry">
                        <div className="lemma" style={{textAlign: this.props.applicationState.searchTerm === "" || this.props.applicationState.searchTerm.startsWith('*') ? 'right' : 'left'}}>{r.lemma}</div>
                        <div className="symbol" dangerouslySetInnerHTML={{ __html: r.symbol }} />
                        <div className="grammar" dangerouslySetInnerHTML={{ __html: r.grammar }} />
                    </div>)}
                            </div>
                        ])}
                    {this.props.applicationState.canLoadMore &&
                        <div className="load-more">
                            (Показаны не все статьи &mdash; используйте поиск)
                        </div>}
                    </InfinityScroll>
                </div>
            </div>;
    }
}
