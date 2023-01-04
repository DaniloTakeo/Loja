class PayloadProdutos {

    constructor() {
        this._paginaProdutos;
    }

    adicionarProdutos(paginaProdutos) {
        this._paginaProdutos = paginaProdutos
    }

    getPayload() {
        return this._paginaProdutos;
    }

    getContent() {
        return this._paginaProdutos.content;
    }
}