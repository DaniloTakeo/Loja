
class HeaderController {
    
    constructor(pageName) {
        let $ = document.querySelector.bind(document);
        this._pageName = pageName;
        this._defaultLocation = 'http://127.0.0.1:5500/';
        
        this._header = $('#cabecalho');
        
        this._headerView = new HeaderView(this._header); 
        this._headerView.update(this._pageName);  

        this._gerenciarProdutosButton = $('#gerenciarProdutos');
        this._entradaProdutosButton = $('#entradaProdutos');
        this._navigationButtons();
    }

    _navigationButtons() {
        this._gerenciarProdutosButton.addEventListener('click', () => {
            window.location.href = `${this._defaultLocation}consulta-de-produtos.html`
        });

        this._entradaProdutosButton.addEventListener('click', () => {
            window.location.href = `${this._defaultLocation}entrada-de-produtos.html`
        });
    }
}