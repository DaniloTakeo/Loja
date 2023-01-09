
class ProdutoController {
    
    constructor() {
        let $ = document.querySelector.bind(document);
        this._pageName = 'Gerenciar Produtos';

        this._inputMarca = $('#inputMarca');
        this._inputDescricao = $('#inputDescricao');
        this._inputPreco = $('#inputPreco');
        this._consultaView = $('#consultaProdutosView');
        this._modal = $('#modalAlteracaoExclusao');
        this._botaoExclusao = $('#botaoExclusao');
        this._botaoAtualizar = $('#botaoAtualizar');
        this._botaoCadastrar = $('#botaoCadastrar');
        this._header = $('#cabecalho');

        this._produtoService = new ProdutoService();
        this._produtosPayload = new PayloadProdutos();
        this._produtosView = new ProdutoView(this._consultaView);
        this._headerController = new HeaderController(this._pageName);
 
        this.listar(this._produtosView.activePage);
        this._botaoCadastrarEvento();
    }

    adicionar() {
        let quantidadePadrao = 0;

        let produto = new Produto(
            this._inputMarca.value,
            this._inputDescricao.value,
            this._inputPreco.value,
            quantidadePadrao
        )

        this._produtoService.adicionar(produto.toString());
        this._limparFormulario();
        location.reload();
    }

    _limparFormulario() {
        this._inputMarca.value = '';
        this._inputDescricao.value = '';
        this._inputPreco .value= '';
    }

    async listar(pagina) {
        this._produtosPayload.adicionarProdutos(await this._produtoService.listarTodos(pagina));
        this._produtosView.setPayload(this._produtosPayload.getPayload());

        this._produtosView.update();
        this._paginationActions();
        this._lineActions();
    }

    _paginationActions() {
        this._nextButtonAction();
        this._previousButtonAction();
        this._activePageHighlight();
        this._pageButtonsAction();
    }

    _nextButtonAction() {
        this._nextButton = document.querySelector('#nextButton');

        if(this._nextButton != null) {
            this._nextButton.addEventListener('click', () => {
                if(this._produtosView.activePage + 1 < this._produtosView.numberOfPages) {
                    this._produtosView.nextPage();
                    this.listar(this._produtosView.activePage);
                }
             })
        } 
    }

    _activePageHighlight() {
        this._activePageButton = document.querySelector(`.page${this._produtosView.activePage + 1}`);
        if(this._activePageButton != null) {
            this._activePageButton.classList.add('active');
        }
    }

    _pageButtonsAction() {
        this._pageButtons = document.querySelectorAll('.page-button');
        this._pageButtons.forEach(b => {
            b.addEventListener('click', () => {
                this._produtosView.setPageNumber(b.textContent - 1);
                this.listar(this._produtosView.activePage);
            })
        })
    }

    _previousButtonAction() {
        this._previousButton = document.querySelector('#previousButton');
        if(this._previousButton != null) {
            this._previousButton.addEventListener('click', () => {
                this._produtosView.previousPage();
                this.listar(this._produtosView.activePage);
            })
        }
    }

    _modalAction(produtoSelecionado) {
        this._produtosView.fillModal(this._modal, produtoSelecionado);
        this._botaoExcluirEvento();
        this._botaoAtualizarEvento(this._modal);
    }

    _lineActions() {
        this._tableLines = document.querySelectorAll('.produto');
        this._tableLines.forEach(p => {
            p.addEventListener('click', () => {
                this._produtoSelecionado = this._criarProduto(p.querySelector('.produto-marca').textContent,
                    p.querySelector('.produto-descricao').textContent, 
                    p.querySelector('.produto-preco').textContent,
                    p.querySelector('.produto-quantidade').textContent, 
                    p.querySelector('.produto-id').textContent);
                
                this._modalAction(this._produtoSelecionado);
                console.log(this._produtoSelecionado);
            })
        });
    }

    _botaoExcluirEvento() {
        this._botaoExclusao.addEventListener('click', () => {
            this._produtoService.excluir(this._produtoSelecionado.id);
            this._produtosView.update();
        })
    }

    _botaoAtualizarEvento(modal) {
        this._botaoAtualizar.addEventListener('click', () => {
            let id = modal.querySelector('#inputModalId').value;
            let marca = modal.querySelector('#inputModalMarca').value;
            let descricao = modal.querySelector('#inputModalDescricao').value;
            let preco = modal.querySelector('#inputModalPreco').value;
            let quantidade = modal.querySelector('#inputModalQuantidade').value;

            let produto = new Produto(marca, descricao, preco, quantidade, id);
            this._produtoService.alterar(id, produto.toString());
            
            this._produtosView.update();
        })
    }

    _botaoCadastrarEvento() {
        this._botaoCadastrar.addEventListener('click', () => {
            this.adicionar();
        })
    }

    _criarProduto(marca, descricao, preco, quantidade, id) {
        let produtoSelecionado = new Produto(marca, descricao, preco, quantidade, id);

        return produtoSelecionado;
    }
}