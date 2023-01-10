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
	public Produto atualizar(Produto produto, Long id) {
		Produto produtoAtualizado = produtoRepository.findById(id).get();
		
		produtoAtualizado.setMarca(produto.getMarca());
		produtoAtualizado.setDescricao(produto.getDescricao());
		produtoAtualizado.setPreco(produto.getPreco());
		
		return produtoAtualizado;
	}

	@Override
	public void deletar(Long id) {
		produtoRepository.deleteById(id);
	}

	@Override
	public Produto buscarPorId(Long id) {
		return produtoRepository.findById(id).get();
	}

	@Override
	public Page<Produto> listarPorTrechoDeDescricaoOuMarca(Pageable paginacao, String like) {
		return produtoRepository.findByMarcaIsLikeOrDescricaoIsLike(paginacao, "%"+like+"%");
	}

	@Override
	public void alterarQuantidade(Long id, Long quantidade) {
		Produto produto = buscarPorId(id);
		
		produto.setQuantidade(produto.getQuantidade() + quantidade);
	}

}
