CREATE TABLE entradas_produto(
	id BIGINT NOT NULL AUTO_INCREMENT,
	id_produto BIGINT NOT NULL,
	data_entrada DATE NOT NULL,
	quantidade BIGINT NOT NULL,
	
	CONSTRAINT pk_id PRIMARY KEY(id),
	CONSTRAINT fk_id_produto FOREIGN KEY(id_produto) REFERENCES produtos(id)
);