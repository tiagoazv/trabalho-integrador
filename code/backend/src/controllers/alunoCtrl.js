const db = require('../db');
const logger = require('../logger');

exports.getAluno = async (req, res) => {
  try {
    const aluno = await db.any('SELECT * FROM aluno');
    res.json(aluno);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getAlunoById = async (req, res) => {
  try {
    const aluno = await db.oneOrNone('SELECT * FROM aluno WHERE id = $1', [req.params.id]);
    if (aluno) {
      res.json(aluno);
    } else {
      res.status(404).send('Aluno não encontrado');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
//id, nome, telefone, email, endereco, datanasc, idturma
exports.createAluno = async (req, res) => {
  try {
    const { id, nome, telefone, email, endereco, datanasc, idturma } = req.body;
    logger.info("Create Body: " + JSON.stringify(req.body));
    const newAluno = await db.one(
      'INSERT INTO aluno (id, nome, telefone, email, endereco, datanasc, idturma) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [id, nome, telefone, email, endereco, datanasc, idturma]
    );
    res.json(newAluno);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateAluno = async (req, res) => {
  try {
    const { id, nome, telefone, email, endereco, datanasc, idturma } = req.body;
    logger.info("Update Body: " + JSON.stringify(req.body));
    const updatedAluno = await db.one(
      'UPDATE aluno SET nome = $1, telefone = $2, email = $3, endereco = $4, datanasc = $5, idturma = $6,  WHERE id = $4 RETURNING *',
      [ nome, telefone, email, endereco, datanasc, idturma, req.params.id]
    );
    res.json(updatedAluno);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteAluno = async (req, res) => {
  try {
    logger.info("Delete Id: " + JSON.stringify(req.params.id));
    await db.none('DELETE FROM aluno WHERE id = $1', [req.params.id]);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};
