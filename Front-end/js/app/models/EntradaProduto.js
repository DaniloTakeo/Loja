class EntradaProduto {
    
    constructor(data, quantidade, produto, id) {
        this._data = data;
        this._quantidade = quantidade;
        this._produto = produto;
        this._id = id
        Object.freeze(this);
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get produto() {
        return this._produto;
    }

    get id() {
        return this._id;
    }

    toString() {
        return {
            dataEntrada: this._data.toLocaleDateString(),
            quantidade: this._quantidade,
            produto: this._produto,
            id: this._id
        }
    }
}