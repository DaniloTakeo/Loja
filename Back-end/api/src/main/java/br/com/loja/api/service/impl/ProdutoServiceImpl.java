package br.com.loja.api.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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

	@Override
	public Page<Produto> listarTodos(Pageable paginacao) {
		return produtoRepository.findAll(paginacao);
	}

	@Override
	public void atualizar(Produto produto, Long id) {
		produtoRepository.save(produto);
	}

	@Override
	public void deletar(Long id) {
		produtoRepository.deleteById(id);
	}

}
