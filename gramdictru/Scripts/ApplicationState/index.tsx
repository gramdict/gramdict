import { flow, observable, action } from "mobx";

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
            //const response = yield fetch(uri);
            //const data = yield response.text;
            const raw = `lemma,symbol,grammar
сода,ж,1а
содалит,м,1а
содвигать,нсв,1а $3(содвИнуть)
содвигаться,нсв,1а $3(содвИнуться)
содвинуть,св,3а $II(содвигАть)
содвинуться,св,3а $II(содвигАться)
содействие,с,7а
содействовать,нсв,нп 2а
содержание,с,7а
содержанка,жо,3*а
содержатель,мо,2а
содержательница,жо,5а
содержательность,ж,8а
содержательный,п,1*а
содержать,нсв,5с?
содержаться,нсв,5с
содержимое,с,п 1а
содеять,св,6а
содеяться,св,6а
содовар,мо,1а
содовый,п,1а
содоклад,м,1а
содокладчик,мо,3а
содом,м,1а
содомит,мо,1а
содомить,нсв,нп 4а
содомия,ж,7а
содомский,п,3а!~
содрать,св,6**в/с @ _буд._ сдерУ, -ёт $II(сдирАть)
содраться,св,6***в/с'' @ _буд._ сдер Усь, -ётся $II (сдирАться)
содрогание,с,7а
содрогаться,нсв,1а $3(-нУться)
содрогнуться,св,3в $II
содружество,с,1а`;
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
        }
    });
}

export type Result = {
    lemma: string;
    symbol: string;
    grammar: string;
}