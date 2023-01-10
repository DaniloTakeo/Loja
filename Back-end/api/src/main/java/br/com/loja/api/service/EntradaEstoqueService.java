package br.com.loja.api.service;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Pageable;

import br.com.loja.api.model.EntradaEstoque;

@Service
public interface EntradaEstoqueService {

	EntradaEstoque cadastrar(EntradaEstoque entradaEstoque);
	
	Page<EntradaEstoque> listarTodos(Pageable paginacao);
	
	EntradaEstoque alterar(EntradaEstoque entradaEstoque, Long id);
	
	void deletar(Long id);
	
	EntradaEstoque buscarPorId(Long id);

}
