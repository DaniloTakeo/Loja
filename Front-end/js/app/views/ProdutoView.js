import PaginatedView from './PaginatedView.js';

export default class ProdutoView extends PaginatedView {

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
                <thead id="tableHeader">
                    <tr>
                        <th id="codigo">Código</th>
                        <th id="marca">Marca</th>
                        <th id="descricao">Descrição</th>
                        <th id="preco">Preço</th>
                        <th id="quantidade">Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    ${this._payloadContent.map(p => {
                        return `
                            <tr id="produto${p.id}" class="produto" data-bs-toggle="modal" data-bs-target="#modalAlteracaoExclusao">
                                <td class="produto-id">${p.id}</td>
                                <td class="produto-marca">${p.marca}</td>
                                <td class="produto-descricao">${p.descricao}</td>
                                <td class="produto-preco">${p.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
                                <td class="produto-quantidade">${p.quantidade}</td>
                            </tr>
                        `
                    }).join('')}
                </tbody>
            </table>
    `

        return template;
    }

    update() {
        this._getPayloadInformation();
        this._elemento.innerHTML = this._template();
        this._elemento.appendChild(this._paginationElement);
        this._paginationUtil();
        this._paginationMenuView.update();
    }

    fillModal(modal, produtoSelecionado) {
        let modalTitle = modal.querySelector('.modal-title');
        let id = modal.querySelector('#inputModalId');
        let marca = modal.querySelector('#inputModalMarca');
        let descricao = modal.querySelector('#inputModalDescricao');
        let preco = modal.querySelector('#inputModalPreco');
        let quantidade = modal.querySelector('#inputModalQuantidade');

        modalTitle.innerHTML = `${produtoSelecionado.marca} ${produtoSelecionado.descricao}`;
        id.value = produtoSelecionado.id;
        marca.value = produtoSelecionado.marca;
        descricao.value = produtoSelecionado.descricao;
        preco.value = produtoSelecionado.preco;
        quantidade.value =  produtoSelecionado.quantidade;
    }
 
    setPayload(payload) {
        this._paylaod = payload;
    }

    _getPayloadInformation() {
        this._totalElements = this._paylaod.totalElements;
        this._payloadContent = this._paylaod.content;
        this._numberOfPages = this._paylaod.totalPages;
    }

    _paginationUtil() {
        this._paginationMenuView = new PaginationMenuView(
            this._paginationElement,
            this._numberOfPages,
            this._totalElements,
            this._activePage
        );
    }

    get payloadContent() {
        return this._payloadContent;
    }
}