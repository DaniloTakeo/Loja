
class ConsultaProdutosView {

    constructor(elemento) {
        this._elemento = elemento;
        this._payloadContent;
    }

    _template() {
        return `
            <table class="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Marca</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    ${this._payloadContent.map(p => {
                        return `
                            <tr>
                                <td>${p.id}</td>
                                <td>${p.marca}</td>
                                <td>${p.descricao}</td>
                                <td>${p.preco}</td>
                            </tr>
                        `
                    }).join('')}
                </tbody>
            </table>
        `
    }

    setContent(payloadContent) {
        this._payloadContent = payloadContent
    }

    update() {
        this._elemento.innerHTML = this._template();
    }
}