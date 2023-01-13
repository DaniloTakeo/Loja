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

                </tbody>
            <table>
        `;

        return template;
    }

    update() {
        this._elemento.innerHTML = this._template();
    }

    _paginationUtil() {
        this._paginationMenuView = new PaginationMenuView(
            this._paginationElement,
            this._numberOfPages,
            this._totalElements,
            this._activePage
        );
    }
}