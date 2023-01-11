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

	@GetMapping
	public ResponseEntity<Page<Produto>> listarTodos(@PageableDefault(size = 10, direction = Direction.ASC) Pageable paginacao) {
		Page<Produto> produtos = produtoService.listarTodos(paginacao);

		return ResponseEntity.ok(produtos);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Produto> buscarPorId(@PathVariable Long id) {
		Produto produto = produtoService.buscarPorId(id);
		
		return ResponseEntity.ok(produto);
	}

	@PutMapping("/{id}")
	@Transactional
	public ResponseEntity<Produto> atualizar(@RequestBody Produto produtoAtualizado, @PathVariable Long id) {
		Produto produto = produtoService.atualizar(produtoAtualizado, id);
		
		return ResponseEntity.ok(produto);
	}

	@DeleteMapping("/{id}")
	@Transactional
	public ResponseEntity<Produto> deletar(@PathVariable Long id) {
		produtoService.deletar(id);
		
		return ResponseEntity.ok().build();
	}
	
	@GetMapping("procurarPorMarcaOuDescricao/{stringLike}")
	public ResponseEntity<Page<Produto>> listarPorTrechoDeDescricaoOuMarca(@PathVariable String stringLike, @PageableDefault(size = 10,
			direction = Direction.ASC) Pageable paginacao) {
		Page<Produto> produtosFiltrados = produtoService.listarPorTrechoDeDescricaoOuMarca(paginacao, stringLike);
		
		return ResponseEntity.ok(produtosFiltrados);
	}
}
