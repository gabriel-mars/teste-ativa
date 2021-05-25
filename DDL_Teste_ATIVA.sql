CREATE DATABASE api_ativa WITH ENCODING = 'UTF8';

\connect api_ativa;

CREATE TABLE usuario (
    id serial PRIMARY KEY NOT NULL,
    email character varying(150) NOT NULL,  
    token character varying(150) NOT NULL,
    senha character varying(150) NOT NULL
);

CREATE TABLE convidado (
    id serial PRIMARY KEY NOT NULL,
    nome character varying(100) NOT NULL,    
    email character varying(150) NOT NULL
);

CREATE TABLE "local" (
    id serial PRIMARY KEY NOT NULL,
    nome character varying(75) NOT NULL   
);

CREATE TABLE tarefa (
    id serial PRIMARY KEY NOT NULL,
    nome character varying(75) NOT NULL,   
    fk_local_id integer NOT NULL,
    data_hora timestamp NOT NULL,
    duracao character varying(5) NOT NULL
);

ALTER TABLE tarefa ADD CONSTRAINT fk_local_id FOREIGN KEY (fk_local_id) REFERENCES local(id) ON UPDATE CASCADE ON DELETE NO ACTION;

CREATE TABLE tarefa_convidado (
    fk_tarefa_id integer NOT NULL,
    fk_convidado_id integer NOT NULL
);

ALTER TABLE tarefa_convidado ADD CONSTRAINT fk_tarefa_id FOREIGN KEY (fk_tarefa_id) REFERENCES tarefa(id) ON UPDATE CASCADE ON DELETE NO ACTION;
ALTER TABLE tarefa_convidado ADD CONSTRAINT fk_convidado_id FOREIGN KEY (fk_convidado_id) REFERENCES convidado(id) ON UPDATE CASCADE ON DELETE NO ACTION;