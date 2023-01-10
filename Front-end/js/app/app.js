import { ProdutoController } from '../app/controllers/ProdutoController.js';
import { EntradaProdutosController } from './controllers/EntradaProdutosController.js';

const URL = `http://127.0.0.1:5500/`;

if(window.location.href == `${URL}consulta-de-produtos.html`) {
    let produtoController = new ProdutoController();
} else if(window.location.href == `${URL}entrada-de-produtos.html`) {
    let entradaController = new EntradaProdutosController();
}
