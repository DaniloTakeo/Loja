package br.com.loja.api.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.loja.api.model.EntradaEstoque;
import br.com.loja.api.model.Produto;
import br.com.loja.api.repository.EntradaEstoqueRepository;
import br.com.loja.api.service.EntradaEstoqueService;
import br.com.loja.api.service.ProdutoService;

@Service
public class EntradaEstoqueServiceImpl implements EntradaEstoqueService {
	
	@Autowired
	private EntradaEstoqueRepository entradaEstoqueRepository;
	
	@Autowired
	private ProdutoService produtoService;

	@Override
	public EntradaEstoque cadastrar(EntradaEstoque entradaEstoque) {
		EntradaEstoque entradaEstoqueCadastrada = entradaEstoqueRepository.save(entradaEstoque);
		Produto produtoEntrante = produtoService.buscarPorId(entradaEstoque.getProduto().getId());
		
		produtoEntrante.setQuantidade(produtoEntrante.getQuantidade() + entradaEstoque.getQuantidade());
		
		return entradaEstoqueCadastrada;
	}

}
