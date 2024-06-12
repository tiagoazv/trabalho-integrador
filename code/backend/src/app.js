const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const alunoRoutes = require('./routes/alunoRoutes');
const conteudoRoutes = require('./routes/conteudoRoutes');
const notaRoutes = require('./routes/notaRoutes');
const professorRoutes = require('./routes/professorRoutes');
const turmaRoutes = require('./routes/turmaRoutes');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Rotas da API
app.use('/aluno', alunoRoutes);
app.use('/conteudo', conteudoRoutes);
app.use('/nota', notaRoutes);
app.use('/professor', professorRoutes);
app.use('/turma', turmaRoutes);

// Serve os arquivos estáticos do React
app.use(express.static(path.join(__dirname, '../../frontend/build')));

// Rota catch-all para o React
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../frontend/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
