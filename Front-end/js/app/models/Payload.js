class Payload {

    constructor() {
        this._paginaElementos;
    }

    adicionarElementos(paginaElementos) {
        this._paginaElementos = paginaElementos
    }

    getPayload() {
        return this._paginaElementos;
    }

}