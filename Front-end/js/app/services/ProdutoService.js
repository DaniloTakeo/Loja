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
            console.log('Success', produto)
        })
        .then((error) => {
            console.error('Error', error)
        });
    }
}