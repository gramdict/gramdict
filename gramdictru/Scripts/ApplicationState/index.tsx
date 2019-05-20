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

export class ApplicationState {
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
        this.lists.clear();
        this.search();
    }

    @action
    toggleList(list: string) {
        this.lists.set(list, !this.lists.get(list));
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
    applyState(term: string, filters: string, lists: string) {
        const decodedSearchTerm = decodeURIComponent(term as string);
        const decodedFilters = (filters as string).split(",").filter(x => x.length > 0).map(f => decodeURIComponent(f));
        const decodedLists = lists.split(",").filter(x => x.length > 0).map(l => decodeURIComponent(l));

        this.searchTerm = decodedSearchTerm === "*" ? "" : decodedSearchTerm;
        this.filters.clear();
        for (let filter of decodedFilters) {
            console.log("applying filter", filter);
            this.filters.set(filter, true);
        }

        this.lists.clear();
        for (let list of decodedLists) {
            console.log("applying list", list);
            this.lists.set(list, true);
        }

        this.search(true);
        if (decodedFilters.length > 0) {
            setTimeout(() => this.filtersAreOpen = true);
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

    search = flow(function* (suppressHistory = false) {
        console.log("Beginning new search");
        this.pageNumber = 0;

        this.callback = (term: string, filters: string, lists: string) => {
            this.results.clear();
            this.total = 0;
            this.reachedLimit = false;

            scrollTo(0, 0);

            if (!suppressHistory) {
                const queryString = [
                    filters.length > 0 ? `symbol=${filters}` : "",
                    lists.length > 0 ? `list=${lists}` : "",
                ]
                    .filter(s => s.length > 0)
                    .join("&");

                const uri = `/search/${term}` + ((queryString.length > 0) ? `?${queryString}` : "");
                history.pushState({
                        term,
                        filters,
                        lists
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

        this.currentSearch = flow(function*(callback?: (term: string, filters: string, lists: string) => void) {
            this.isLoading = true;
            this.hasError = false;

            let term = encodeURIComponent(this.searchTerm.trim());
            term = term == "" ? "*" : term;
            const filters = Array.from(this.filters.entries())
                .filter(arr => arr[1])
                .map(arr => encodeURIComponent(arr[0]))
                .join(",");
            const lists = Array.from(this.lists.entries())
                .filter(arr => arr[1])
                .map(arr => encodeURIComponent(arr[0]))
                .join(",");

            try {
                let uri =
                    `http://localhost:5000/v1/search/${term}?pagesize=${this.pageSize}&pagenum=${this.pageNumber}`;
                if (filters.length > 0) {
                    uri = uri + `&symbol=${filters}`;
                }

                if (lists.length > 0) {
                    uri = uri + `&list=${lists}`;
                }

                console.log("making request", uri);
                const data: ApiResponse = yield axios.get(uri,
                    {
                        timeout: 30000,
                        responseType: "text",
                    })
                    .then((response) => response.data);
                

                if (callback !== undefined) {
                    callback(term, filters, lists);
                }

                this.hasSearched = true;

                if (data.entries.length < this.pageSize) {
                    console.log(`Got ${data.entries.length} lines which is less than the page size of ${this.pageSize}`);
                    this.reachedLimit = true;
                } else {
                    console.log(`Got ${data.entries.length} lines`);
                    this.reachedLimit = false;
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