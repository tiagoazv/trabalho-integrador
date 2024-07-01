const db = require('../db');
const logger = require('../logger');

exports.getTurma = async (req, res) => {
  try {
    const turma = await db.any('SELECT t.id, t.vagas, p.nome AS professor, c.nome AS conteudo, t.dia FROM turma t JOIN professor p ON t.idprofessor = p.id JOIN conteudo c ON t.idconteudo = c.id ORDER BY t.dia');
    res.json(turma);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getTurmaById = async (req, res) => {
  try {
    const turma = await db.oneOrNone('SELECT * FROM turma WHERE id = $1', [req.params.id]);
    if (turma) {
      res.json(turma);
    } else {
      res.status(404).send('Turma não encontrado');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
//id, vagas, idprofessor, idconteudo, dia
exports.createTurma = async (req, res) => {
  try {
    const {vagas, idprofessor, idconteudo, dia } = req.body;
    logger.info("Create Body: " + JSON.stringify(req.body));
    if(idprofessor===""){
      res.status(500).send("Você precisar selecionar um professor.");
    }
    if(idconteudo===""){
      res.status(500).send("Você precisar selecionar um conteúdo.");
    }
    const newTurma = await db.one(
      'INSERT INTO turma (vagas, idprofessor, idconteudo, dia) VALUES ($1, $2, $3, $4) RETURNING *',
      [vagas, idprofessor, idconteudo, dia]
    );
    res.json(newTurma);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateTurma = async (req, res) => {
  try {
    const { id, vagas, idprofessor, idconteudo, dia } = req.body;
    logger.info("Update Body: " + JSON.stringify(req.body));
    const updatedTurma = await db.one(
      'UPDATE turma SET vagas = $1, idprofessor = $2, idconteudo = $3, dia = $4 WHERE id = $5 RETURNING *',
      [ vagas, idprofessor, idconteudo, dia, req.params.id]
    );
    res.json(updatedTurma);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteTurma = async (req, res) => {
  try {
    logger.info("Delete Id: " + JSON.stringify(req.params.id));
    await db.none('DELETE FROM turma WHERE id = $1', [req.params.id]);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};
