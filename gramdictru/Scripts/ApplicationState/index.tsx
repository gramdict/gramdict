import { flow, observable, action, computed } from "mobx";
import { resize } from "../App";
import { CancellablePromise } from "mobx/lib/api/flow";
import axios from "axios";
import * as Papa from "papaparse";

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
    pageSize = 210;

    @observable
    pageNumber = 0;

    @observable
    reachedLimit = false;

    @observable
    total = 0;

    @computed
    get canLoadMore() {
        return !this.reachedLimit && !this.isLoading;
    }

    callback?: () => void;

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

    search = flow(function* () {
        console.log("Beginning new search");
        this.pageNumber = 0;

        this.callback = () => {
            this.results.clear();
            this.total = 0;
            this.reachedLimit = false;
            scrollTo(0, 0);
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

        this.currentSearch = flow(function*(callback?: () => void) {
            this.isLoading = true;
            this.hasError = false;

            let term = encodeURIComponent(this.searchTerm.trim());
            term = term == "" ? "*" : term;

            try {
                const uri =
                    `http://api.gramdict.ru/v1/search/${term}?pagesize=${this.pageSize}&pagenum=${this.pageNumber}`;
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
                    callback();
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