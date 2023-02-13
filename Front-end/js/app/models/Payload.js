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

    limparPayload() {
        this._paginaElementos = [];
    }

    isEmpty() {
        return this._paginaElementos == false ? true : false;
    }

}