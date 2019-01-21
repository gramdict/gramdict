﻿import { flow, observable, action } from "mobx";

export class ApplicationState {
    @observable
    hasSearched = false;

    @observable
    searchTerm = "";

    @observable
    results: Array<Result> = observable([]);

    @observable
    isLoading = false;

    @observable
    pageSize = 20;

    @observable
    pageNumber = 1;

    @observable
    reachedLimit = false;

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
        this.results.clear();
        this.pageNumber = 0;

        yield this.continue();
    });

    continue = flow(function* () {
        this.hasSearched = true;
        this.pageNumber++;
        this.isLoading = true;
        const term = this.searchTerm == "" ? "*" : this.searchTerm;

        try {
            const uri = `http://api.gramdict.ru/v1/search/${term}?pagesize=${this.pageSize}&pagenum=${this.pageNumber}`;
            console.log("making request", uri);
            const response = yield fetch(uri);
            const raw = yield response.text();
            console.log("got a response from the server");
            const [_, ...lines] = raw.split("\n");
            const data = lines.map(l => {
                const [lemma, symbol, grammar] = l.split(",");
                return {
                    lemma,
                    symbol,
                    grammar
                };
            });

            if (data.length < this.pageSize) {
                console.log(`Got ${data.length} lines which is less than the page size of ${this.pageSize}`);
                this.reachedLimit = true;
            }

            this.isLoading = false;
            this.results = this.results.concat(data);
        } catch (error) {
            this.isLoading = false;
            this.reachedLimit = true;
        }
    });
}

export type Result = {
    lemma: string;
    symbol: string;
    grammar: string;
}