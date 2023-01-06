package br.com.loja.api.controller;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import br.com.loja.api.model.EntradaEstoque;
import br.com.loja.api.service.EntradaEstoqueService;
import jakarta.transaction.Transactional;

@RestController
@RequestMapping("/entradaEstoque")
public class EntradaEstoqueController {

	@Autowired
	private EntradaEstoqueService entradaEstoqueService;
	
	@PostMapping
	@Transactional
	public ResponseEntity<EntradaEstoque> cadastrar(@RequestBody EntradaEstoque entradaEstoque, UriComponentsBuilder uriBuilder) {
		EntradaEstoque entradaEstoqueCadastrada = entradaEstoqueService.cadastrar(entradaEstoque);
		
		URI uri = uriBuilder.path("/entradaEstoque/{id}").buildAndExpand(entradaEstoqueCadastrada.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
}
