export class EntradaProdutosController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._header = $('#cabecalho');
        this._modalRegistro = $('#modalRegistroEntradas');
        this._pagName = 'Entrada de Produtos';

        this._headerController = new HeaderController(this._pagName);
        this._entradaService = new EntradaProdutoService();
        this._produtoService = new ProdutoService();

        this._preencherInputProduto();
    }

    async _preencherInputProduto() {
        let inputId = this._modalRegistro.querySelector('#inputId');
        let inputProduto = this._modalRegistro.querySelector('#inputProduto');
        inputId.addEventListener('focusout', async () => {
            let id = inputId.value;
            if(id) {
                let produto = await this._produtoService.buscarPorId(id);
                console.log(produto);
                if(produto) {
                    inputProduto.value = `${produto.marca} ${produto.descricao}`;
                } else {
                    inputProduto.value = '';
                }
            }
        })
    }

    _preencherInputData() {
        let inputData = this._modalRegistro.querySelector('#inputData');

    }
}