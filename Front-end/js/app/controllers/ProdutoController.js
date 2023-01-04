
class ProdutoController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputMarca = $('#inputMarca');
        this._inputDescricao = $('#inputDescricao');
        this._inputPreco = $('#inputPreco');
        this._consultaView = $('#consultaProdutosView')

        this._produtoService = new ProdutoService();
        this._produtosPayload = new PayloadProdutos();

        this.listar();

        this._consultaProdutosView = new ConsultaProdutosView(this._consultaView);
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
        this._limparFormulario();
    }

    _limparFormulario() {
        this._inputMarca.value = '';
        this._inputDescricao.value = '';
        this._inputPreco .value= '';
        
        this._inputMarca.focus();
    }

    async listar() {
        this._produtosPayload.adicionarProdutos(await this._produtoService.listarTodos());
        this._consultaProdutosView.setContent(this._produtosPayload.getContent());
        
        console.log(this._produtosPayload.getPayload());
        console.log(this._produtosPayload.getContent());

        this._consultaProdutosView.update();
    }
}