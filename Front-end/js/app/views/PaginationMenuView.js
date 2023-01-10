class PaginationMenuView {

    constructor(elemento, numberOfPages, totalElements, activePage) {
        this._elemento = elemento;
        this._numberOfPages = numberOfPages;
        this._totalElements = totalElements;
        this._activePage = activePage;
    }

    _template() {
        let template = `
            <nav aria-label="Page navigation" class="d-flex">
                <ul class="pagination col justify-content-center">
                    <li id="previousButton" class="page-item"><a class="page-link">Previous</a></li>
                    ${this._generatePageNumbers()}
                    <li id="nextButton" class="page-item"><a class="page-link">Next</a></li>
                </ul>
            </nav>
        `;

        if(this._totalElements < 10) {
            return '';
        } else {
            return template;
        }
    }

    update() {
        this._elemento.innerHTML = this._template();
    }

    _generatePageNumbers() {
        let pageNumbers = '';

        for (let i = 0; i < this._numberOfPages; i++) {
            let pageNumber = `<li class="page-item page${i+1} page-button"><a class="page-link"> ${i+1} </a></li>`;

            pageNumbers += pageNumber;
        }

        return pageNumbers;
    }
}