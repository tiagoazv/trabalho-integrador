CREATE DATABASE escola;
\c escola;

CREATE TABLE conteudo (
    id INT PRIMARY KEY,
    nome VARCHAR(70),
    descricao VARCHAR(200),
    qtdAulas INT
);

CREATE TABLE professor (
    id INT PRIMARY KEY,
    nome VARCHAR(70),
    telefone VARCHAR(30),
    email VARCHAR(100),
    endereco VARCHAR(70),
    nomeUsuario VARCHAR(20),
    senha VARCHAR(512)
);

CREATE TABLE turma (
    nTurma INT PRIMARY KEY,
    qtdVagas INT,
    hora_diaSemana VARCHAR(20),
    idConteudo INT REFERENCES conteudo(id),
    idProfessor INT REFERENCES professor(id)
);


CREATE TABLE aluno (
    codigo INT PRIMARY KEY,
    nome VARCHAR(70),
    dataNasc DATE,
    telefone VARCHAR(30),
    endereco VARCHAR(70),
    cpf VARCHAR(11),
    email VARCHAR(100),
    turma INT REFERENCES turma(nTurma)
);

CREATE TABLE notas (
    id INT PRIMARY KEY,
    notaFinal DECIMAL(2,1),
    qtdAulasDadas INT,
    qtdFaltas INT,
    dataInicioConteudo DATE,
    dataTerminoConteudo DATE,
    codigoAluno INT REFERENCES aluno(codigo),
    idConteudo INT REFERENCES conteudo(id)
);
