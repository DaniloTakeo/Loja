class ProdutoService {

    adicionar(produto) {
        fetch('http://localhost:8080/produtos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(produto)
        })
        .then((response) => response.json)
        .then((produto) => {
            console.log('Success', produto);
            alert('Produto adicionado!');
        });
    }

    async listarTodos(pagina) {
        return fetch(`http://localhost:8080/produtos?page=${pagina}`, {
            method: 'GET'
        })
        .then(function(response){
            return response.json();
        });
    }
}