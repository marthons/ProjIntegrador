CREATE TABLE filme 
( 
 idroterista INT,  
 iddiretor INT,  
 idFilme SERIAL PRIMARY KEY,  
 titulo VARCHAR(50) NOT NULL,  
 data_lancamento DATE NOT NULL,  
 idator INT
); 

CREATE TABLE ator 
( 
 idAtor SERIAL PRIMARY KEY,  
 nome VARCHAR(50) NOT NULL,  
 nacionalidade VARCHAR(50) NOT NULL,  
 data_nascimento DATE
); 

CREATE TABLE roterista 
( 
 idRoterista SERIAL PRIMARY KEY,  
 nome VARCHAR(50) NOT NULL,  
 nacionalidade VARCHAR(50)  
); 

CREATE TABLE diretor 
( 
 idDiretor SERIAL PRIMARY KEY NOT NULL,  
 nome VARCHAR(50) NOT NULL
); 



ALTER TABLE filme
ADD CONSTRAINT fk_filme_roterista FOREIGN KEY (idroterista)
REFERENCES roterista (idroterista);

ALTER TABLE filme
ADD CONSTRAINT fk_filme_diretor FOREIGN KEY (iddiretor)
REFERENCES diretor (iddiretor);

ALTER TABLE filme
ADD CONSTRAINT fk_filme_ator FOREIGN KEY (idator)
REFERENCES ator (idator);
