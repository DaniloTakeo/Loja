
class ProdutoView {

    constructor(elemento) {
        this._elemento = elemento;
        this._payload;
        this._payloadContent;
        this._totalElements;
        this._numberOfPages;
        this._activePage = 0;
        this._paginationElement = document.createElement('div');
        this._paginationElement.id = 'paginationElement';
    }

    _template() {
        let template = `
        <table class="table table-hover table-striped">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Marca</th>
                    <th>Descrição</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
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

    nextPage() {
        if(this._activePage != this._numberOfPages){
            this._activePage += 1;
        }
    }

    previousPage() {
        if(this._activePage > 0) {
            this._activePage -= 1;
        }
    }

    setPageNumber(pageNumber) {
        this._activePage = pageNumber;
    }

    get activePage() {
        return this._activePage;
    }

    get numberOfPages() {
        return this._numberOfPages;
    }
}