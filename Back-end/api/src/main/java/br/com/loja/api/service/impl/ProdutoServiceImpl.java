package br.com.loja.api.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.loja.api.model.Produto;
import br.com.loja.api.repository.ProdutoRepository;
import br.com.loja.api.service.ProdutoService;

@Service
public class ProdutoServiceImpl implements ProdutoService {
	
	@Autowired
	private ProdutoRepository produtoRepository;

	@Override
	public Produto cadastrar(Produto produto) {
		return produtoRepository.save(produto);
	}

}
