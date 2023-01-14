class EntradaProdutoService  {

    constructor() {
        this._defaultAPIadress = `http://localhost:8080/`;
    }
 
    adicionar(entradaEstoque) {
        fetch(`${this._defaultAPIadress}entradaEstoque`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(entradaEstoque.toString())
        })
        .then((response) => response.json)
        .then((entradaEstoque) => {
            console.log('Success', entradaEstoque);
        });
    }

    async listarTodos(pagina) {
        return fetch(`${this._defaultAPIadress}entradaEstoque?page=${pagina}`, {
            method: 'GET'
        })
        .then(function(response) {
            return response.json();
        });
    }
}