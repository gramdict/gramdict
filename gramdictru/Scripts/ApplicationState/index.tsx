import { flow, observable, action, computed } from "mobx";

export class ApplicationState {
    @observable
    hasSearched = false;

    @observable
    searchTerm = "";

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

        yield this.continue(() => {
            this.results.clear();
            this.pageNumber = 0;
            this.total = 0;
            this.reachedLimit = false;
        });
    });

    continue = flow(function* (callback?: () => void) {
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

            if (callback !== undefined) {
                callback();
            }

            this.hasSearched = true;

            if (data.length < this.pageSize) {
                console.log(`Got ${data.length} lines which is less than the page size of ${this.pageSize}`);
                this.reachedLimit = true;
            } else {
                console.log(`Got ${data.length} lines`);
            }

            this.results.push(data);
            this.total += data.length;
        } catch (error) {
            this.reachedLimit = true;
            console.log("Got an error calling the API");
        } finally {
            this.isLoading = false;
            this.pageNumber++;
        }
    });
}

export type Result = {
    lemma: string;
    symbol: string;
    grammar: string;
}