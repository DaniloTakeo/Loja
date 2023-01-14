import EntradaProdutosView from '../views/EntradaProdutosView.js';

export class EntradaProdutosController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._header = $('#cabecalho');
        this._modalRegistro = $('#modalRegistroEntradas');
        this._entradasView = $('#consultaEntradasView');
        this._pageName = 'Entrada de Produtos';

        this._headerController = new HeaderController(this._pageName);
        this._entradaService = new EntradaProdutoService();
        this._produtoService = new ProdutoService();
        this._entradasView = new EntradaProdutosView(this._entradasView);
        this._paginationController = new PaginationController(this._produtosView, this);
        this._entradasPayload = new Payload();

        this._preencherInputProduto();
        this._botaoAdicionarAction();
        this.listar(this._entradasView.activePage);
    }

    async _preencherInputProduto() {
        let inputId = this._modalRegistro.querySelector('#inputId');
        let inputProduto = this._modalRegistro.querySelector('#inputProduto');
        inputId.addEventListener('focusout', async () => {
            let id = inputId.value;
            if(id) {
                let produto = await this._produtoService.buscarPorId(id);
                if(produto) {
                    inputProduto.value = `${produto.marca} ${produto.descricao}`;
                } else {
                    inputProduto.value = '';
                }
            }
        })
    }

    async adicionar() {
        let inputData = this._modalRegistro.querySelector('#inputData');
        let inputIdProduto = this._modalRegistro.querySelector('#inputId');
        let inputQuantidade = this._modalRegistro.querySelector('#inputQuantidade');

        let produto = await this._produtoService.buscarPorId(inputIdProduto.value);

        console.log(produto);

        let entradaProduto = new EntradaProduto(
            new Date(inputData.value),
            inputQuantidade.value,
            produto
        );

        console.log(entradaProduto);

        this._entradaService.adicionar(entradaProduto);
        this._limparFormulario();
        location.reload();
    }

    async listar(pagina) {
        this._entradasPayload.limparPayload();
        this._entradasPayload.adicionarElementos(await this._entradaService.listarTodos(pagina));
        console.log(this._entradasPayload.getPayload());
        this._entradasView.setPayload(this._entradasPayload.getPayload());
        this._entradasView.update();
    }
    
    _limparFormulario() {
        this._modalRegistro.querySelectorAll('.form-control').forEach(input => {
            input.value = '';
        });
    }

    _botaoAdicionarAction() {
        let botaoAdicionar = this._modalRegistro.querySelector('#botaoAdicionar');
        console.log(botaoAdicionar);

        botaoAdicionar.addEventListener('click', () => {
            this.adicionar();
        })
    }

}