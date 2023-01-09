class HeaderView {

    constructor(elemento) {
        this._elemento = elemento;
    }

    _template(nomeDaPagina) {
        return `
            <div class="d-flex flex-wrap justify-content-between center py-3 mb-4 border-bottom">
                <a href="#" class="d-flex align-itens-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span class="fs-4">${nomeDaPagina}</span>
                </a>
                <div class="dropdown">
                    <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Produtos
                    </button>
                    <ul class="dropdown-menu">
                        <li><button class="dropdown-item" type="button" id="gerenciarProdutos">Gerenciar produtos</button></li>
                        <li><button class="dropdown-item" type="button" id="entradaProdutos">Entradas</button></li>
                    </ul>
                </div>
                <div class="dropdown">
                    <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Vendas
                    </button>
                    <ul class="dropdown-menu">
                        <li><button class="dropdown-item" type="button">Consultar vendas</button></li>
                        <li><button class="dropdown-item" type="button">Realizar vendas</button></li>
                    </ul>
                </div>
                <div class="dropdown">
                    <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Clientes
                    </button>
                    <ul class="dropdown-menu">
                        <li><button class="dropdown-item" type="button">Consultar clientes</button></li>
                    </ul>
                </div>
            </div>
        `
    }

    update(nomeDaPagina) {
        this._elemento.innerHTML = this._template(nomeDaPagina);
    }
}