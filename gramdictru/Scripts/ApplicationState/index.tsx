import { flow, observable, action, computed } from "mobx";
import { resize } from "../App";
import { CancellablePromise } from "mobx/lib/api/flow";
import axios from "axios";
import * as Papa from "papaparse";
import * as isMobile from "ismobilejs";

export class ApplicationState {
    currentSearch: CancellablePromise<{}>;

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
        this.filtersAreOpen = !this.filtersAreOpen;
    }

    callback?: () => void;

    @action
    toggleFilter(filter: string) {
        this.filters.set(filter, !this.filters.get(filter));
        this.search();
    }

    @action
    resetFilters() {
        this.filters.clear();
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
    applyState(term: string, filters: string) {
        const decodedSearchTerm = decodeURIComponent(term as string);
        const decodedFilters = (filters as string).split(",").filter(x => x.length > 0).map(f => decodeURIComponent(f));
        
        this.searchTerm = decodedSearchTerm === "*" ? "" : decodedSearchTerm;
        this.filters.clear();
        for (let filter of decodedFilters) {
            console.log("applying filter", filter);
            this.filters.set(filter, true);
        }

        this.search(true);
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

    search = flow(function* (suppressHistory = false) {
        console.log("Beginning new search");
        this.pageNumber = 0;

        this.callback = (term: string, filters: string) => {
            this.results.clear();
            this.total = 0;
            this.reachedLimit = false;

            scrollTo(0, 0);

            if (!suppressHistory) {
                const uri = `/search/${term}` + ((filters.length > 0) ? `?symbol=${filters}` : "");
                history.pushState({
                        term,
                        filters,
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

        this.currentSearch = flow(function*(callback?: (term: string, filters: string) => void) {
            this.isLoading = true;
            this.hasError = false;

            let term = encodeURIComponent(this.searchTerm.trim());
            term = term == "" ? "*" : term;
            const filters = Array.from(this.filters.entries())
                .filter(arr => arr[1])
                .map(arr => encodeURIComponent(arr[0]))
                .join(",");

            try {
                let uri =
                    `http://dev3.morpher.ru/v1/search/${term}?pagesize=${this.pageSize}&pagenum=${this.pageNumber}`;
                if (filters.length > 0) {
                    uri = uri + `&symbol=${filters}`;
                }

                console.log("making request", uri);
                const data = yield axios.get(uri,
                    {
                        timeout: 15000,
                        responseType: "text",
                    })
                    .then((response) => {
                        const [_, ...lines] = Papa.parse(response.data,
                            {
                                skipEmptyLines: true,
                            }).data;
                        return lines.map(l => {
                            const [lemma, symbol, grammar] = l;
                            return {
                                lemma,
                                symbol,
                                grammar
                            };
                        });
                    });
                

                if (callback !== undefined) {
                    callback(term, filters);
                }

                this.hasSearched = true;

                if (data.length < this.pageSize) {
                    console.log(`Got ${data.length} lines which is less than the page size of ${this.pageSize}`);
                    this.reachedLimit = true;
                } else {
                    console.log(`Got ${data.length} lines`);
                    this.reachedLimit = false;
                }

                this.results.push(data);
                this.total += data.length;
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
}