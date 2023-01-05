class Produto {

    constructor(marca, descricao, preco, id) {
        this._marca = marca;
        this._descricao = descricao;
        this._preco = preco;
        this._id = id;
        Object.freeze(this);
    }

    get marca() {
        return this._marca;
    }

    get descricao() {
        return this._descricao;
    }

    get preco() {
        return this._preco;
    }

    get id() {
        return this._id;
    }

    toString() {
        return {
            marca: this._marca,
            descricao: this._descricao,
            preco: this._preco
        }
    }
}

