package br.com.loja.api.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.com.loja.api.model.Produto;

@Service
public interface ProdutoService {

	public Produto cadastrar(Produto produto);

	public Page<Produto> listarTodos(Pageable paginacao);
}
