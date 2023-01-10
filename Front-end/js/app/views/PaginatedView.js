export default class PaginatedView {

    constructor() {
        this._numberOfPages;
        this._totalElements;
        this._activePage = 0;
    }

    nextPage() {
        if(this._activePage != this._numberOfPages){
            this._activePage += 1;
        }
    }

    previousPage() {
        if(this._activePage > 0) {
            this._activePage -= 1;
        }
    }

    setPageNumber(pageNumber) {
        this._activePage = pageNumber;
    }

    get numberOfPages() {
        return this._numberOfPages;
    }

    get totalElememnts() {
        return this._totalElements;
    }

    get activePage() {
        return this._activePage;
    }
}