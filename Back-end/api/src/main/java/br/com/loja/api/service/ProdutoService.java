package br.com.loja.api.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.com.loja.api.model.Produto;

@Service
public interface ProdutoService {

	public Produto cadastrar(Produto produto);

	public Page<Produto> listarTodos(Pageable paginacao);
	
	public Produto atualizar(Produto produto, Long id);
	
	public void deletar(Long id);

	public Produto buscarPorId(Long id);
	
	public Page<Produto> listarPorTrechoDeDescricaoOuMarca(Pageable paginacao, String like);
	
	public void alterarQuantidade(Long id, Long quantidade);
	
}
