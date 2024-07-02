--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4 (Ubuntu 15.4-1.pgdg22.04+1)
-- Dumped by pg_dump version 15.4 (Ubuntu 15.4-1.pgdg22.04+1)

-- Started on 2024-07-02 15:31:23 -03

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 221 (class 1259 OID 20347)
-- Name: aluno; Type: TABLE; Schema: public; Owner: postgres
--
CREATE DATABASE bse;
\c bse

CREATE TABLE public.aluno (
    id integer NOT NULL,
    nome character varying(55) NOT NULL,
    telefone character varying(20) NOT NULL,
    email character varying(100) NOT NULL,
    endereco character varying(80) NOT NULL,
    datanasc date NOT NULL,
    idturma integer
);


ALTER TABLE public.aluno OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 20346)
-- Name: aluno_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.aluno_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.aluno_id_seq OWNER TO postgres;

--
-- TOC entry 3413 (class 0 OID 0)
-- Dependencies: 220
-- Name: aluno_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.aluno_id_seq OWNED BY public.aluno.id;


--
-- TOC entry 215 (class 1259 OID 20307)
-- Name: conteudo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.conteudo (
    id integer NOT NULL,
    nome character varying(55) NOT NULL,
    qtaulasprevistas integer NOT NULL,
    descr text NOT NULL
);


ALTER TABLE public.conteudo OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 20306)
-- Name: conteudo_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.conteudo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.conteudo_id_seq OWNER TO postgres;

--
-- TOC entry 3414 (class 0 OID 0)
-- Dependencies: 214
-- Name: conteudo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.conteudo_id_seq OWNED BY public.conteudo.id;


--
-- TOC entry 223 (class 1259 OID 20359)
-- Name: nota; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.nota (
    id integer NOT NULL,
    nota numeric NOT NULL,
    qtaulas integer NOT NULL,
    dataini date NOT NULL,
    datafim date NOT NULL,
    idaluno integer,
    idconteudo integer
);


ALTER TABLE public.nota OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 20358)
-- Name: nota_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.nota_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.nota_id_seq OWNER TO postgres;

--
-- TOC entry 3415 (class 0 OID 0)
-- Dependencies: 222
-- Name: nota_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.nota_id_seq OWNED BY public.nota.id;


--
-- TOC entry 217 (class 1259 OID 20314)
-- Name: professor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.professor (
    id integer NOT NULL,
    nome character varying(55) NOT NULL,
    telefone character varying(20) NOT NULL,
    email character varying(80) NOT NULL,
    endereco character varying(100) NOT NULL,
    username character varying(20) NOT NULL,
    senha text NOT NULL
);


ALTER TABLE public.professor OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 20313)
-- Name: professor_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.professor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.professor_id_seq OWNER TO postgres;

--
-- TOC entry 3416 (class 0 OID 0)
-- Dependencies: 216
-- Name: professor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.professor_id_seq OWNED BY public.professor.id;


--
-- TOC entry 219 (class 1259 OID 20330)
-- Name: turma; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.turma (
    id integer NOT NULL,
    vagas integer NOT NULL,
    dia character varying(20) NOT NULL,
    idprofessor integer,
    idconteudo integer
);


ALTER TABLE public.turma OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 20329)
-- Name: turma_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.turma_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.turma_id_seq OWNER TO postgres;

--
-- TOC entry 3417 (class 0 OID 0)
-- Dependencies: 218
-- Name: turma_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.turma_id_seq OWNED BY public.turma.id;


--
-- TOC entry 3241 (class 2604 OID 20350)
-- Name: aluno id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.aluno ALTER COLUMN id SET DEFAULT nextval('public.aluno_id_seq'::regclass);


--
-- TOC entry 3238 (class 2604 OID 20310)
-- Name: conteudo id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conteudo ALTER COLUMN id SET DEFAULT nextval('public.conteudo_id_seq'::regclass);


--
-- TOC entry 3242 (class 2604 OID 20362)
-- Name: nota id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota ALTER COLUMN id SET DEFAULT nextval('public.nota_id_seq'::regclass);


--
-- TOC entry 3239 (class 2604 OID 20317)
-- Name: professor id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.professor ALTER COLUMN id SET DEFAULT nextval('public.professor_id_seq'::regclass);


--
-- TOC entry 3240 (class 2604 OID 20333)
-- Name: turma id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.turma ALTER COLUMN id SET DEFAULT nextval('public.turma_id_seq'::regclass);


--
-- TOC entry 3405 (class 0 OID 20347)
-- Dependencies: 221
-- Data for Name: aluno; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.aluno (id, nome, telefone, email, endereco, datanasc, idturma) FROM stdin;
4	Eduardo Bryan Santos	(81) 2546-7772	eduardo.bryan@gmail.com	Rua William Banister Forsyth	1997-01-12	5
6	Jennifer Luana Lima	(86) 3620-2119	jennifer.lima@gmail.com	Rua Constância Gomes da Silva	1985-07-01	5
3	Bianca Heloisa Isabel da Conceição	(82) 2800-5399	bianca.heloisa.daconceicao@reval.net	Rua Sebastião Ribeiro Barbosa	2001-09-28	8
5	Enzo Arthur Sérgio da Paz	(48) 2552-6114	enzo.dapaz@gmail.com	Rua Jonas Jorge Lacerda	1997-01-12	10
7	Raimundo João Cardoso	(82) 98973-1743	raimundo.cardoso@gmail.com	Rua Alferes João da Rocha Pires, 299	1989-01-06	13
8	Emily Luciana Moura	(48) 2868-5122	emily.moura@gmail.com	Rua Servidão Jarbas D' Oliveira, 87	2008-08-08	9
9	Eduardo Giovanni Geraldo Santos	(44) 2831-1820	eduardo.santos@gmail.com	Rua Pioneiro Matheus Castilho Martos, 999	2001-07-17	11
10	Augusto Cauã Marcelo Silveira	(44) 99988-8849	augusto.silveira@gmail.com	Rua Joaquina Vieira Bem, 287	2005-07-03	6
11	Heitor Enrico Benedito Moraes	(44) 99988-8849	heitor.moraes@gmail.com	Avenida Santiago do Chile, 2232	1997-05-05	12
12	Gabriel Emanuel Nogueira	(49) 99821-0173	gabriel.nogueira	Rua Carlos Gomes, 149	2002-03-13	13
\.


--
-- TOC entry 3399 (class 0 OID 20307)
-- Dependencies: 215
-- Data for Name: conteudo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.conteudo (id, nome, qtaulasprevistas, descr) FROM stdin;
37	Sistema Operacional	12	Aprenda a utilizar o computador.
38	Internet	18	Aprenda a utilizar a internet e suas ferramentas.
40	Pacote Office	36	Processador de textos, planilha e criação de slides.
42	Introdução à Programação	24	Conceitos básicos de programação, lógica de programação e primeiros passos com uma linguagem de programação como Python.
43	Redes de Computadores	30	Fundamentos de redes, protocolos de comunicação, topologias de rede e segurança de redes.
44	Banco de Dados	28	Modelagem de dados, SQL, sistemas de gerenciamento de banco de dados (SGBD) e manipulação de dados.
45	Desenvolvimento Web	32	HTML, CSS, JavaScript e frameworks para desenvolvimento de aplicações web.
46	Segurança da Informação	20	Princípios de segurança da informação, criptografia, políticas de segurança e técnicas de proteção de dados.
47	Administração de Sistemas	22	Configuração e manutenção de servidores, serviços de rede e ferramentas de administração de sistemas.
48	Engenharia de Software	30	Metodologias de desenvolvimento de software, ciclo de vida de desenvolvimento e gerenciamento de projetos.
49	Computação em Nuvem	18	Conceitos de computação em nuvem, serviços de nuvem, virtualização e infraestrutura como serviço (IaaS).
\.


--
-- TOC entry 3407 (class 0 OID 20359)
-- Dependencies: 223
-- Data for Name: nota; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.nota (id, nota, qtaulas, dataini, datafim, idaluno, idconteudo) FROM stdin;
1	10	12	2024-01-01	2024-04-01	4	37
3	8.5	12	2024-01-01	2024-04-01	6	38
4	5.5	36	2024-01-01	2024-06-01	3	45
5	6.6	14	2024-03-08	2024-06-08	5	43
6	4.5	16	2024-03-08	2024-05-17	7	44
7	8	22	2024-02-11	2024-04-22	8	46
8	7	24	2024-02-11	2024-05-12	9	47
9	7	16	2024-03-07	2024-05-13	10	42
10	5	12	2024-02-02	2024-04-02	11	38
11	10	12	2024-03-01	2024-05-03	12	37
\.


--
-- TOC entry 3401 (class 0 OID 20314)
-- Dependencies: 217
-- Data for Name: professor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.professor (id, nome, telefone, email, endereco, username, senha) FROM stdin;
1	Aline Santos	(49) 99812-7301	teste@gmail.com	Rua Imaginária, 475	aline.santos	Aline123
2	Cauã Silva	(49) 99825-4223	caua.silva@gmail.com	Rua Fulano de Tal, 146	caua.silva	stroo
4	Roberto Dias	(49) 99825-4224	roberto.dias@gmail.com	Rua Fulano de Tal, 148	roberto.dias	123
6	Isabela Carvalho	(49) 99825-4229	isabela.carvalho@gmail.com	Rua Fulano de Tal, 150	isabela.carvalho	123
5	Carlos Pontes	(49) 99825-3535	carlos.pontes@gmail.com	Rua Fulano de Tal, 149	carlos.pontes	123
0	Tiago Azevedo	(49) 99812-7300	tiago@gmail.com	Rua João Suzin, 784	tiago.azevedo	$2b$10$VTZcaLEJ0awsiBsy7SZ17eZzbctBIHd1Km0Qxsnvm/WAi7UAL9ccC
\.


--
-- TOC entry 3403 (class 0 OID 20330)
-- Dependencies: 219
-- Data for Name: turma; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.turma (id, vagas, dia, idprofessor, idconteudo) FROM stdin;
5	10	Terça	0	37
6	8	Segunda	1	37
8	24	Quarta	4	40
9	16	Terça	6	47
10	18	Quinta	5	46
11	18	Sexta	0	45
12	20	Segunda	6	48
13	28	Sexta	6	42
14	18	Quinta	5	44
\.


--
-- TOC entry 3418 (class 0 OID 0)
-- Dependencies: 220
-- Name: aluno_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.aluno_id_seq', 12, true);


--
-- TOC entry 3419 (class 0 OID 0)
-- Dependencies: 214
-- Name: conteudo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.conteudo_id_seq', 49, true);


--
-- TOC entry 3420 (class 0 OID 0)
-- Dependencies: 222
-- Name: nota_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.nota_id_seq', 11, true);


--
-- TOC entry 3421 (class 0 OID 0)
-- Dependencies: 216
-- Name: professor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.professor_id_seq', 6, true);


--
-- TOC entry 3422 (class 0 OID 0)
-- Dependencies: 218
-- Name: turma_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.turma_id_seq', 14, true);


--
-- TOC entry 3250 (class 2606 OID 20352)
-- Name: aluno aluno_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.aluno
    ADD CONSTRAINT aluno_pkey PRIMARY KEY (id);


--
-- TOC entry 3252 (class 2606 OID 20366)
-- Name: nota nota_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota
    ADD CONSTRAINT nota_pkey PRIMARY KEY (id);


--
-- TOC entry 3244 (class 2606 OID 20328)
-- Name: conteudo pk_conteudo; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conteudo
    ADD CONSTRAINT pk_conteudo PRIMARY KEY (id);


--
-- TOC entry 3248 (class 2606 OID 20380)
-- Name: turma pk_turma; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.turma
    ADD CONSTRAINT pk_turma PRIMARY KEY (id);


--
-- TOC entry 3246 (class 2606 OID 20378)
-- Name: professor professor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.professor
    ADD CONSTRAINT professor_pkey PRIMARY KEY (id);


--
-- TOC entry 3254 (class 2606 OID 20367)
-- Name: nota fk_aluno; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota
    ADD CONSTRAINT fk_aluno FOREIGN KEY (idaluno) REFERENCES public.aluno(id);


--
-- TOC entry 3253 (class 2606 OID 20341)
-- Name: turma fk_conteudo; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.turma
    ADD CONSTRAINT fk_conteudo FOREIGN KEY (idconteudo) REFERENCES public.conteudo(id);


--
-- TOC entry 3255 (class 2606 OID 20372)
-- Name: nota fk_conteudo; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota
    ADD CONSTRAINT fk_conteudo FOREIGN KEY (idconteudo) REFERENCES public.conteudo(id);


-- Completed on 2024-07-02 15:31:26 -03

--
-- PostgreSQL database dump complete
--

