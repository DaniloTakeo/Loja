
class ConsultaProdutosView {

    constructor(elemento) {
        this._elemento = elemento;
        this._payload;
        this._payloadContent;
        this._totalElements;
        this._numberOfPages;
        this._activePage = 0;
    }

    _template() {
        let template = `
        <table class="table table-hover table-striped">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Marca</th>
                    <th>Descrição</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                ${this._payloadContent.map(p => {
                    return `
                        <tr>
                            <td>${p.id}</td>
                            <td>${p.marca}</td>
                            <td>${p.descricao}</td>
                            <td>${p.preco}</td>
                        </tr>
                    `
                }).join('')}
            </tbody>
        </table>
        ${this._pagination()}
    `

        return template;
    }

    setPayload(payload) {
        this._paylaod = payload;
    }

    _setContent() {
        this._payloadContent = this._paylaod.content
    }

    _setNumberOfPages() {
        console.log(this._paylaod);
        this._numberOfPages = this._paylaod.totalPages;
    }

    update() {
        this._setContent();
        this._setNumberOfPages();
        this._elemento.innerHTML = this._template();
    }

    _pagination() {
        if(this._totalElements < 10) {
            return '';
        } else {
            return `
                <nav aria-label="Page navigation" class="d-flex">
                    <ul class="pagination col justify-content-center">
                        <li id="previousButton" class="page-item"><a class="page-link">Previous</a></li>
                        ${this._generatePageNumbers()}
                        <li id="nextButton" class="page-item"><a class="page-link">Next</a></li>
                    </ul>
                </nav>
            `
        }
    }

    _generatePageNumbers() {
        let pageNumbers = '';

        for (let i = 0; i < this._numberOfPages; i++) {
            let pageNumber = `<li class="page-item page${i+1} page-button"><a class="page-link"> ${i+1} </a></li>`;

            pageNumbers += pageNumber;
        }

        return pageNumbers;
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

    get activePage() {
        return this._activePage;
    }
}