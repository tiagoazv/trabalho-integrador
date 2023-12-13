SET client_encoding TO UTF8;

INSERT INTO conteudo (id, nome, descricao, qtdAulas) VALUES
    (1, 'Introdução à Lógica de Programação', 'Princípios básicos de lógica de programação', 20),
    (2, 'Desenvolvimento Web com HTML e CSS', 'Construção de páginas web utilizando HTML e CSS', 18),
    (3, 'Programação em Python', 'Fundamentos da programação utilizando Python', 25),
    (4, 'Banco de Dados Relacional', 'Conceitos de bancos de dados relacionais', 22),
    (5, 'Redes de Computadores', 'Princípios básicos de redes de computadores', 15),
    (6, 'Segurança da Informação', 'Aspectos básicos da segurança da informação', 20),
    (7, 'Desenvolvimento Mobile com Flutter', 'Construção de aplicativos móveis com Flutter', 12),
    (8, 'Machine Learning com Python', 'Introdução ao aprendizado de máquina com Python', 18),
    (9, 'Desenvolvimento Ágil de Software', 'Práticas ágeis no desenvolvimento de software', 20),
    (10, 'Inteligência Artificial', 'Conceitos e aplicações de inteligência artificial', 16);

INSERT INTO professor (id, nome, telefone, email, endereco, nomeUsuario, senha) VALUES
    (1, 'João Silva', '(11) 1234-5678', 'joao.silva@email.com', 'Rua A, 123', 'joao123', 'senha123'),
    (2, 'Maria Oliveira', '(22) 9876-5432', 'maria.oliveira@email.com', 'Rua B, 456', 'maria456', 'senha456'),
    (3, 'Carlos Santos', '(33) 5555-5555', 'carlos.santos@email.com', 'Rua C, 789', 'carlos789', 'senha789'),
    (4, 'Ana Souza', '(44) 1111-2222', 'ana.souza@email.com', 'Rua D, 987', 'ana987', 'senha987'),
    (5, 'Pedro Lima', '(55) 9999-8888', 'pedro.lima@email.com', 'Rua E, 654', 'pedro654', 'senha654'),
    (6, 'Fernanda Rocha', '(66) 3333-4444', 'fernanda.rocha@email.com', 'Rua F, 321', 'fernanda321', 'senha321'),
    (7, 'Ricardo Pereira', '(77) 7777-8888', 'ricardo.pereira@email.com', 'Rua G, 159', 'ricardo159', 'senha159'),
    (8, 'Camila Alves', '(88) 2222-3333', 'camila.alves@email.com', 'Rua H, 753', 'camila753', 'senha753'),
    (9, 'Gabriel Costa', '(99) 6666-7777', 'gabriel.costa@email.com', 'Rua I, 456', 'gabriel456', 'senha456'),
    (10, 'Isabela Santos', '(44) 4444-5555', 'isabela.santos@email.com', 'Rua J, 852', 'isabela852', 'senha852');

INSERT INTO turma (nTurma, qtdVagas, hora_diaSemana, idConteudo, idProfessor) VALUES
    (1, 30, '08:00 - Segunda', 1, 1),
    (2, 25, '10:00 - Terça', 2, 2),
    (3, 20, '14:00 - Quarta', 3, 3),
    (4, 15, '16:00 - Quinta', 4, 4),
    (5, 28, '18:00 - Sexta', 5, 5),
    (6, 22, '10:30 - Sábado', 6, 6),
    (7, 18, '13:00 - Domingo', 7, 7),
    (8, 25, '15:30 - Segunda', 8, 8),
    (9, 20, '17:00 - Terça', 9, 9),
    (10, 30, '19:00 - Quarta', 10, 10);

INSERT INTO aluno (codigo, nome, dataNasc, telefone, endereco, cpf, email, turma) VALUES
    (1, 'Lucas Oliveira', '2000-01-15', '(11) 1111-1111', 'Rua X, 123', '12345678901', 'lucas@email.com', 1),
    (2, 'Mariana Santos', '1999-05-20', '(22) 2222-2222', 'Rua Y, 456', '23456789012', 'mariana@email.com', 2),
    (3, 'Fábio Lima', '2001-03-10', '(33) 3333-3333', 'Rua Z, 789', '34567890123', 'fabio@email.com', 3),
    (4, 'Carla Souza', '2002-07-05', '(44) 4444-4444', 'Rua W, 987', '45678901234', 'carla@email.com', 4),
    (5, 'Rafael Santos', '1998-11-28', '(55) 5555-5555', 'Rua V, 654', '56789012345', 'rafael@email.com', 5),
    (6, 'Juliana Pereira', '2003-09-14', '(66) 6666-6666', 'Rua U, 321', '67890123456', 'juliana@email.com', 6),
    (7, 'Carlos Alves', '2000-12-02', '(77) 7777-7777', 'Rua T, 159', '78901234567', 'carlos@email.com', 7),
    (8, 'Laura Costa', '1999-08-18', '(88) 8888-8888', 'Rua S, 753', '89012345678', 'laura@email.com', 8),
    (9, 'Pedro Santos', '2002-04-25', '(99) 9999-9999', 'Rua R, 852', '90123456789', 'pedro@email.com', 9),
    (10, 'Isabel Pereira', '2001-06-30', '(44) 1010-1010', 'Rua Q, 456', '01234567890', 'isabel@email.com', 10);

INSERT INTO notas (id, notaFinal, qtdAulasDadas, qtdFaltas, dataInicioConteudo, dataTerminoConteudo, codigoAluno, idConteudo) VALUES
    (1, 8.5, 15, 2, '2023-01-01', '2023-02-15', 1, 1),
    (2, 7.2, 12, 3, '2023-02-01', '2023-03-15', 2, 2),
    (3, 9.0, 18, 1, '2023-03-01', '2023-04-18', 3, 3),
    (4, 6.8, 14, 4, '2023-04-01', '2023-05-15', 4, 4),
    (5, 8.0, 20, 1, '2023-05-01', '2023-06-20', 5, 5),
    (6, 9.5, 16, 2, '2023-06-01', '2023-07-15', 6, 6),
    (7, 7.0, 12, 3, '2023-07-01', '2023-08-18', 7, 7),
    (8, 9.2, 18, 1, '2023-08-01', '2023-09-15', 8, 8),
    (9, 8.7, 15, 2, '2023-09-01', '2023-10-20', 9, 9),
    (10, 7.5, 20, 1, '2023-10-01', '2023-11-20', 10, 10);
