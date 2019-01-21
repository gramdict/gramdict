import { flow, observable, action } from "mobx";

export class ApplicationState {
    @observable
    searchTerm = "";

    results = [];
    state = "pending";

    @action
    updateSearchTerm(searchTerm: string) {
        console.log("updating search term", searchTerm);
        this.searchTerm = searchTerm;
    }

    search = flow(function * () {
        this.results = [];
        this.state = "pending";
        const term = this.searchTerm == "" ? "*" : this.searchTerm;

        try {
            const response = yield fetch(`http://api.gramdict.ru/v1/search/${term}`);
            const data = yield response.json();
            this.results = data;
        } catch (error) {

        }
    });

    updateResults() {

    }
}