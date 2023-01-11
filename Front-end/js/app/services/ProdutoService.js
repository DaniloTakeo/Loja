class ProdutoService {

    constructor() {
        this._defaultAPIadress = `http://localhost:8080/`;
    }

    adicionar(produto) {
        fetch(`${this._defaultAPIadress}produtos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(produto)
        })
        .then((response) => response.json)
        .then((produto) => {
            console.log('Success', produto);
        });
    }

    async listarTodos(pagina) {
        return fetch(`${this._defaultAPIadress}produtos?page=${pagina}`, {
            method: 'GET'
        })
        .then(function(response){
            return response.json();
        });
    }

    async listarPesquisa(pagina, stringPesquisa) {
        return fetch(`${this._defaultAPIadress}produtos/procurarPorMarcaOuDescricao/${stringPesquisa}?page=${pagina}`, {
            method: 'GET'
        })
        .then(function(response){
            return response.json();
        });
    }

    async buscarPorId(id) {
        return fetch(`${this._defaultAPIadress}produtos/${id}`, {
            method: 'GET'
        })
        .then(function(response) {
            return response.json();
        });
    }

    alterar(id, produto) {
        fetch(`${this._defaultAPIadress}produtos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(produto)
        })
        .then(response => response.json)
    }

    excluir(id) {
        fetch(`${this._defaultAPIadress}produtos/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json)
    }
}