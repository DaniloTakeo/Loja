
class ProdutoController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputMarca = $('#inputMarca');
        this._inputDescricao = $('#inputDescricao');
        this._inputPreco = $('#inputPreco');
        this._consultaView = $('#consultaProdutosView');
        this._modal = $('#modalAlteracaoExclusao');
        this._botaoExclusao = $('#botaoExclusao');
        this._botaoAtualizar = $('#botaoAtualizar');

        console.log(this._botaoExclusao);

        this._produtoService = new ProdutoService();
        this._produtosPayload = new PayloadProdutos();
        this._consultaProdutosView = new ConsultaProdutosView(this._consultaView);

        this.listar(this._consultaProdutosView.activePage);
    }

    adicionar(event) {
        event.preventDefault();

        let produto = new Produto(
            this._inputMarca.value,
            this._inputDescricao.value,
            this._inputPreco.value
        )

        this._produtoService.adicionar(produto.toString());
        this._limparFormulario();
    }

    _limparFormulario() {
        this._inputMarca.value = '';
        this._inputDescricao.value = '';
        this._inputPreco .value= '';
        
        this._inputMarca.focus();
    }

    async listar(pagina) {
        this._produtosPayload.adicionarProdutos(await this._produtoService.listarTodos(pagina));
        this._consultaProdutosView.setPayload(this._produtosPayload.getPayload());

        this._consultaProdutosView.update();
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
        this._nextButton.addEventListener('click', () => {
            if(this._consultaProdutosView.activePage + 1 < this._consultaProdutosView.numberOfPages) {
                this._consultaProdutosView.nextPage();
                this.listar(this._consultaProdutosView.activePage);
            }
         })
    }

    _activePageHighlight() {
        this._activePageButton = document.querySelector(`.page${this._consultaProdutosView.activePage + 1}`);
        this._activePageButton.classList.add('active');
    }

    _pageButtonsAction() {
        this._pageButtons = document.querySelectorAll('.page-button');
        this._pageButtons.forEach(b => {
            b.addEventListener('click', () => {
                this._consultaProdutosView.setPageNumber(b.textContent - 1);
                this.listar(this._consultaProdutosView.activePage);
            })
        })
    }

    _previousButtonAction() {
        this._previousButton = document.querySelector('#previousButton');
        this._previousButton.addEventListener('click', () => {
            this._consultaProdutosView.previousPage();
            this.listar(this._consultaProdutosView.activePage);
        })
    }

    _modalAction(produtoSelecionado) {
        this._consultaProdutosView.fillModal(this._modal, produtoSelecionado);
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
                    p.querySelector('.produto-id').textContent);
                
                this._modalAction(this._produtoSelecionado);
                console.log(this._produtoSelecionado);
            })
        });
    }

    _botaoExcluirEvento() {
        this._botaoExclusao.addEventListener('click', () => {
            this._produtoService.excluir(this._produtoSelecionado.id);
            this._consultaProdutosView.update();
        })
    }

    _botaoAtualizarEvento(modal) {
        this._botaoAtualizar.addEventListener('click', () => {
            let id = modal.querySelector('#inputModalId').value;
            let marca = modal.querySelector('#inputModalMarca').value;
            let descricao = modal.querySelector('#inputModalDescricao').value;
            let preco = modal.querySelector('#inputModalPreco').value;

            let produto = new Produto(marca, descricao, preco, id);
            this._produtoService.alterar(id, produto.toString());
            
            this._consultaProdutosView.update();
        })
    }

    _criarProduto(marca, descricao, preco, id) {
        let produtoSelecionado = new Produto(marca, descricao, preco, id);

        return produtoSelecionado;
    }
}