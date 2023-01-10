package br.com.loja.api.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.com.loja.api.model.EntradaEstoque;
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
		
		produtoService.alterarQuantidade(entradaEstoque.getProduto().getId(), entradaEstoque.getQuantidade());
		return entradaEstoqueCadastrada;
	}

	@Override
	public Page<EntradaEstoque> listarTodos(Pageable paginacao) {
		return entradaEstoqueRepository.findAll(paginacao);
	}

	@Override
	public EntradaEstoque alterar(EntradaEstoque entradaEstoque, Long id) {
		EntradaEstoque entradas = entradaEstoqueRepository.findById(id).get();
		
		Long quantidadeAntiga = entradas.getQuantidade();
		
		entradas.setProduto(entradaEstoque.getProduto());
		entradas.setDataEntrada(entradaEstoque.getDataEntrada());
		entradas.setQuantidade(entradaEstoque.getQuantidade());
		
		produtoService.alterarQuantidade(entradas.getProduto().getId(), (quantidadeAntiga - entradas.getQuantidade())*-1);
		
		return entradas;
	}

	@Override
	public void deletar(Long id) {
		EntradaEstoque entrada = buscarPorId(id);
		
		produtoService.alterarQuantidade(entrada.getProduto().getId(), entrada.getQuantidade()*-1);
		
		entradaEstoqueRepository.deleteById(id);
	}

	@Override
	public EntradaEstoque buscarPorId(Long id) {
		return entradaEstoqueRepository.findById(id).get();
	}

}
