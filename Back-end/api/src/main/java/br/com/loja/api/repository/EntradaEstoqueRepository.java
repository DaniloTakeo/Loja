package br.com.loja.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.loja.api.model.EntradaEstoque;

public interface EntradaEstoqueRepository extends JpaRepository<EntradaEstoque, Long> {

}
