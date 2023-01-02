package br.com.loja.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.loja.api.model.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {

}
