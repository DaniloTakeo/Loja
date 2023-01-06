package br.com.loja.api.service;

import org.springframework.stereotype.Service;

import br.com.loja.api.model.EntradaEstoque;

@Service
public interface EntradaEstoqueService {

	EntradaEstoque cadastrar(EntradaEstoque entradaEstoque);

}
