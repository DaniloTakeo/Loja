class EntradaProdutosController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._header = $('#cabecalho');
        this._nomeDaPagina = 'Entrada de Produtos';

        this._headerView = new HeaderView(this._header);

        this._renderizarCabecalho();
    }

    _renderizarCabecalho() {
        this._headerView.update(this._nomeDaPagina);
    }
}