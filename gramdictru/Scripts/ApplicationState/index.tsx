import * as React from "react";
import { flow, observable, action, computed } from "mobx";
import { resize } from "../App";
import { CancellablePromise } from "mobx/lib/api/flow";
import axios from "axios";
import * as isMobile from "ismobilejs";

type ApiEntry = {
    lemma: string,
    symbol: string,
    grammar: string,
}

type ApiResponse = {
    ["matching-entries-count"]: number,
    ["total-entries-count"]: number,
    entries: ApiEntry[],
}

const circleString = "①②③④⑤⑥⑦⑧⑨";
function apiValueNormalizer(value: string) {
    const circleIndex = circleString.indexOf(value);
    if (circleIndex > -1) {
        return (circleIndex + 1).toString();
    }

    return value.replace("§", "");
}

export const defaultAnimationTime = 400;

export class ApplicationState {
    @action
    ensureFilterAreClosed() {
        if (!this.filtersAreOpen) {
            const searchResults = document.getElementById("search-results");
            searchResults.classList.add("filters-invisible");

            setTimeout(() => {
                this.closeFilterControl();
                searchResults.scrollBy(0, 1);
            }, 0);
        }
    }

    @observable
    nextAnimationHeight: string | number = 0;
    
    @observable
    nextAnimationTime: number = defaultAnimationTime;


    currentSearch: CancellablePromise<{}>;

    @observable
    matchingEntriesCount: number;

    @observable
    totalEntriesCount: number;

    @computed
    get filterTotals() {
        if (typeof this.matchingEntriesCount === "undefined" || typeof this.totalEntriesCount === "undefined") {
            return "";
        }

        if (this.matchingEntriesCount === this.totalEntriesCount) {
            return `Статей: ${this.matchingEntriesCount}`;
        }

        if (this.matchingEntriesCount < this.totalEntriesCount) {
            return `Статей: ${this.matchingEntriesCount} из ${this.totalEntriesCount}`;
        }

        return "";
    }

    @observable
    hasSearched = false;

    @observable
    hasError = false;

    @observable
    searchTerm = "";

    @observable
    searchedTerm = "";

    @observable
    results: Array<Array<Result>> = observable([]);

    @observable
    isLoading = false;

    @observable
    pageSize = isMobile.any ? 20 : 210;

    @observable
    pageNumber = 0;

    @observable
    reachedLimit = false;

    @observable
    total = 0;

    @observable
    shortResultLimit = 20;

    @observable
    filtersAreOpen = false;

    @observable
    filters = new Map<string, boolean>();

    @observable
    lists = new Map<string, boolean>();

    @observable
    additionals = new Map<string, boolean>();

    @observable
    stresses = new Map<string, boolean>();

    @observable
    indexes = new Map<string, boolean>();

    @observable
    circles = new Map<string, boolean>();

    @observable
    paras = new Map<string, boolean>();

    @computed
    get canLoadMore() {
        return !this.reachedLimit && !this.isLoading;
    }

    @computed
    get isShortResult() {
        return this.shortResultLimit >= this.total;
    }

    @action
    toggleFilterControl() {
        if (this.filtersAreOpen) {
            this.closeFilterControl();
        } else {
            this.openFilterControl();
        }
    }

    @action
    openFilterControl() {
        this.filtersAreOpen = true;
        this.nextAnimationHeight = "auto";
        this.nextAnimationTime = defaultAnimationTime;
    }

    @action
    closeFilterControl(size = 0, time = defaultAnimationTime) {
        this.filtersAreOpen = false;
        this.nextAnimationHeight = size;
        this.nextAnimationTime = time;
    }

    callback?: () => void;

    @action
    toggleFilter(filter: string) {
        this.filters.set(filter, !this.filters.get(filter));
        this.search();
    }

    @action
    toggleList(list: string) {
        this.lists.set(list, !this.lists.get(list));
        this.search();
    }

    @action
    toggleAdditional(additional: string) {
        this.additionals.set(additional, !this.additionals.get(additional));
        this.search();
    }


    @action
    toggleIndex(index: string) {
        this.indexes.set(index, !this.indexes.get(index));
        this.search();
    }

    @action
    toggleStress(stress: string) {
        this.stresses.set(stress, !this.stresses.get(stress));
        this.search();
    }

    @action
    toggleCircle(circle: string) {
        this.circles.set(circle, !this.circles.get(circle));
        this.search();
    }

    @action
    togglePara(para: string) {
        this.paras.set(para, !this.paras.get(para));
        this.search();
    }

    @action
    resetFilters() {
        this.filters.clear();
        this.lists.clear();
        this.additionals.clear();
        this.indexes.clear();
        this.stresses.clear();
        this.circles.clear();
        this.paras.clear();
        this.search();
    }

    @action
    updateSearchTerm(searchTerm: string) {
        console.log("updating search term", searchTerm);
        this.searchTerm = searchTerm;
        this.search();
    }

    @action
    triggerInitialSearch() {
        if (this.hasSearched === false) {
            this.search();
        }
    }

    @action
    applyState(term: string, filters: string, lists: string, additionals: string, indexes: string, stresses: string, circles: string, paras: string) {
        const fixupFilter = (encoded: string, filters: Map<string, boolean>) => {
            const decoded = encoded.split(",").filter(x => x.length > 0).map(l => decodeURIComponent(l));
            filters.clear();
            for (let filter of decoded) {
                filters.set(filter, true);
            }

            return filters.size > 0;
        }

        const decodedSearchTerm = decodeURIComponent(term as string);
        this.searchTerm = decodedSearchTerm === "*" ? "" : decodedSearchTerm;

        const hasFilters = fixupFilter(filters, this.filters);
        fixupFilter(lists, this.lists);
        fixupFilter(indexes, this.indexes);
        fixupFilter(additionals, this.additionals);
        fixupFilter(stresses, this.stresses);
        fixupFilter(circles, this.circles);
        fixupFilter(paras, this.paras);
        
        this.search(true);
        if (hasFilters) {
            setTimeout(() => this.openFilterControl());
        }
    }

    @action
    resetSearch() {
        this.hasSearched = false;
        this.hasError = false;
        this.searchTerm = "";
        this.searchedTerm = "";
        this.results = [];
        this.isLoading = false;
        this.filtersAreOpen = false;
    }

    pageEncode = (thing: Map<string, boolean>) => Array.from(thing.entries())
        .filter(arr => arr[1])
        .map(arr => encodeURIComponent(arr[0]))
        .join(",");
    apiEncode = (thing: Map<string, boolean>) => Array.from(thing.entries())
        .filter(arr => arr[1])
        .map(arr => encodeURIComponent(apiValueNormalizer(arr[0])))
        .join(",");

    search = flow(function* (suppressHistory = false) {
        console.log("Beginning new search");
        this.pageNumber = 0;

        this.callback = (term: string, queryString: string, state: any) => {
            this.results.clear();
            this.total = 0;
            this.reachedLimit = false;

            scrollTo(0, 0);

            if (!suppressHistory) {
                const uri = `/search/${term}` + ((queryString.length > 0) ? `?${queryString}` : "");
                history.pushState({
                        term,
                        ...state
                    },
                    document.title,
                    uri);
            }
        }

        yield this.continue();
    });

    continue = flow(function* () {
        if (!!this.currentSearch) {
            try {
                this.currentSearch.cancel();
            } catch (e) {
                console.log("Could not cancel search", e);
            }
        }

        this.currentSearch = flow(function* (callback?: (term: string, queryString: string, state: any) => void) {
            this.isLoading = true;
            this.hasError = false;

            let term = encodeURIComponent(this.searchTerm.trim());
            term = term == "" ? "*" : term;
            
            const apiSearchParams = {
                pagesize: this.pageSize.toString(),
                pagenum: this.pageNumber.toString(),
                symbol: this.apiEncode(this.filters),
                list: this.apiEncode(this.lists),
                additional: this.apiEncode(this.additionals),
                index: this.apiEncode(this.indexes),
                stress: this.apiEncode(this.stresses),
                circle: this.apiEncode(this.circles),
                para: this.apiEncode(this.paras),
            };
            const apiQueryString = Object.keys(apiSearchParams)
                .filter(x => apiSearchParams[x].length > 0)
                .map(x => `${x}=${apiSearchParams[x]}`)
                .join("&");

            const pageState = {
                symbol: this.pageEncode(this.filters),
                list: this.pageEncode(this.lists),
                additional: this.pageEncode(this.additionals),
                index: this.pageEncode(this.indexes),
                stress: this.pageEncode(this.stresses),
                circle: this.pageEncode(this.circles),
                para: this.pageEncode(this.paras),
            }
            const pageQueryString = Object.keys(pageState)
                .filter(x => pageState[x].length > 0)
                .map(x => `${x}=${pageState[x]}`)
                .join("&");

            try {
                const uri = `https://api.gramdict.ru/v1/search/${term}?${apiQueryString}`;

                console.log("making request", uri);
                const data: ApiResponse = yield axios.get(uri,
                    {
                        timeout: 30000,
                        responseType: "text",
                    })
                    .then((response) => response.data);
                

                if (callback !== undefined) {
                    callback(term, pageQueryString, pageState);
                }

                this.hasSearched = true;

                if (data.entries.length < this.pageSize) {
                    console.log(`Got ${data.entries.length} lines which is less than the page size of ${this.pageSize}`);
                    this.reachedLimit = true;
                } else {
                    console.log(`Got ${data.entries.length} lines`);
                    this.reachedLimit = false;
                }
                
                //response adjustments
                if (data.entries && data.entries.constructor === Array){
                    for (let index = 0; index < data.entries.length; ++index) {
                        if (data.entries[index].grammar && data.entries[index].grammar.constructor === String)  {
                            if (data.entries[index].grammar.includes("П2")){
                                data.entries[index].grammar = data.entries[index].grammar.replace(new RegExp("П2"), "П<sub>2</sub>");
                                // console.log("П2");
                            }
                            if (data.entries[index].grammar.includes("Р2")){
                                data.entries[index].grammar = data.entries[index].grammar.replace(new RegExp("Р2"), "Р<sub>2</sub>");
                                // console.log("Р2");
                            }
                        }
                    }
                }

                this.totalEntriesCount = data["total-entries-count"];
                this.matchingEntriesCount = data["matching-entries-count"];
                this.results.push(data.entries);
                this.total += data.entries.length;
                this.searchedTerm = term;
                this.pageNumber++;
                this.callback = undefined;
            } catch (error) {
                this.reachedLimit = true;
                this.hasError = true;
                console.log("Got an error calling the API", error);
            } finally {
                console.log("No longer loading");
                this.isLoading = false;
                setTimeout(resize, 0);
            }
        }).bind(this)(this.callback);
        
        return this.currentSearch;
    });
}

export type Result = {
    lemma: string;
    symbol: string;
    grammar: string;
    list: string;
}