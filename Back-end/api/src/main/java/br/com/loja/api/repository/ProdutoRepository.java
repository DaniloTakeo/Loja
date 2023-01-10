package br.com.loja.api.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.loja.api.model.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {

	@Query(value = "SELECT * FROM produtos p WHERE p.marca LIKE %?1% OR p.descricao LIKE %?1%",
			countQuery = "SELECT COUNT(*) FROM produtos p WHERE p.marca LIKE %?1% OR p.descricao LIKE %?1%",
			nativeQuery = true)
	public Page<Produto> findByMarcaIsLikeOrDescricaoIsLike(Pageable paginacao, @Param("stringLike") String like);
}
