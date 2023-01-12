package br.com.loja.api.controller;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
		System.out.println(entradaEstoque);
		EntradaEstoque entradaEstoqueCadastrada = entradaEstoqueService.cadastrar(entradaEstoque);
		
		URI uri = uriBuilder.path("/entradaEstoque/{id}").buildAndExpand(entradaEstoqueCadastrada.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
	
	@GetMapping
	public ResponseEntity<Page<EntradaEstoque>> listarTodos(@PageableDefault(size = 10, direction = Direction.ASC) Pageable paginacao) {
		Page<EntradaEstoque> entradaEstoque = entradaEstoqueService.listarTodos(paginacao);
		
		return ResponseEntity.ok(entradaEstoque);
	}
	
	@PutMapping("/{id}")
	@Transactional
	public ResponseEntity<EntradaEstoque> atualizar(@RequestBody EntradaEstoque entradaEstoque, @PathVariable Long id) {
		EntradaEstoque entradas = entradaEstoqueService.alterar(entradaEstoque, id);
		
		return ResponseEntity.ok(entradas);
	}
	
	@DeleteMapping("/{id}")
	@Transactional
	public ResponseEntity<EntradaEstoque> deletar (@PathVariable Long id) {	
		entradaEstoqueService.deletar(id);
		
		return ResponseEntity.ok().build();
	}
}
