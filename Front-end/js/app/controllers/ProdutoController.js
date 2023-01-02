
class ProdutoController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._produtoService = new ProdutoService();
        this._inputMarca = $('#inputMarca');
        this._inputDescricao = $('#inputDescricao');
        this._inputPreco = $('#inputPreco');
    }

    adicionar(event) {
        event.preventDefault();

        let produto = new Produto(
            this._inputMarca.value,
            this._inputDescricao.value,
            this._inputPreco.value
        )

        this._produtoService.adicionar(produto.toString());

        console.log(JSON.stringify(produto.toString()));

        alert('Produto adicionado!');
    }
}