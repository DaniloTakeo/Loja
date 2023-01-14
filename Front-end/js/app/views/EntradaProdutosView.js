import PaginatedView from './PaginatedView.js';

export default class EntradaProdutosView extends PaginatedView {
    
    constructor(elemento) {
        super();
        this._elemento = elemento;
        this._payload;
        this._payloadContent;
        this._paginationElement = document.createElement('div');
        this._paginationElement.id = 'paginationElement';
    }

    _template() {
        let template = `
            <table class="table table-hover table-striped">
                <thead>
                    <tr>
                        <th id="codigo">Código</th>
                        <th id="produto">Produto</th>
                        <th id="quantidade">Quantidade</th>
                        <th id="data">Data</th>
                    </tr>
                </thead>
                <tbody>
                    ${this._payloadContent.map(p => {
                        return `
                            <tr>
                                <td>${p.id}</td>
                                <td>${p.produto.marca} ${p.produto.descricao}</td>
                                <td>${p.quantidade}</td>
                                <td>${p.dataEntrada}</td>
                            </tr>
                        `
                    }).join('')}
                </tbody>
            <table>
        `;

        return template;
    }

    update() {
        this._getPayloadInformation();
        this._elemento.innerHTML = this._template();
        this._elemento.appendChild(this._paginationElement);
        this._paginationUtil();
        this._paginationMenuView.update();
    }

    _paginationUtil() {
        this._paginationMenuView = new PaginationMenuView(
            this._paginationElement,
            this._numberOfPages,
            this._totalElements,
            this._activePage
        );
    }

    _getPayloadInformation() {
        this._totalElements = this._payload.totalElements;
        this._payloadContent = this._payload.content;
        this._numberOfPages = this._payload.totalPages;
    }

    setPayload(payload) {
        this._payload = payload;
    }

    get payloadContent() {
        return this._payloadContent;
    }
}