export class EntradaProdutosController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._header = $('#cabecalho');
        this._pagName = 'Entrada de Produtos';

        this._headerController = new HeaderController(this._pagName);
    }

}