package br.com.loja.api.controller;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import br.com.loja.api.model.Produto;
import br.com.loja.api.service.ProdutoService;
import jakarta.transaction.Transactional;

@RestController
@RequestMapping("/produtos")
public class ProdutoController {

	@Autowired
	private ProdutoService produtoService;
	
	@PostMapping
	@Transactional
	public ResponseEntity<Produto> cadastrar(@RequestBody Produto produto, UriComponentsBuilder uriBuilder) {
		Produto produtoCadastrado = produtoService.cadastrar(produto);
		
		URI uri = uriBuilder.path("/produtos/{id}").buildAndExpand(produtoCadastrado.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
}
