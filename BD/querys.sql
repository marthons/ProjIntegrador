SELECT * FROM filme;

SELECT * FROM ator WHERE nacionalidade = 'Brasileiro';

SELECT filme.titulo, roterista.nome AS nome_roteirista
FROM filme
JOIN roterista ON filme.idroterista = roterista.idroterista;

SELECT filme.titulo, diretor.nome AS nome_diretor, ator.nome AS nome_ator_principal
FROM filme
JOIN diretor ON filme.iddiretor = diretor.iddiretor
JOIN ator ON filme.idator = ator.idator;

CREATE OR REPLACE FUNCTION contar_filmes_por_diretor(diretor_id INT)
RETURNS INT AS $$
DECLARE
  total_filmes INT;
BEGIN
  SELECT COUNT(*) INTO total_filmes
  FROM filme
  WHERE iddiretor = diretor_id;
  
  RETURN total_filmes;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE PROCEDURE atualizar_nacionalidade_do_ator(ator_id INT, nova_nacionalidade VARCHAR(50))
LANGUAGE plpgsql
AS $$
BEGIN
  UPDATE ator SET nacionalidade = nova_nacionalidade WHERE idator = ator_id;
END;
$$;
