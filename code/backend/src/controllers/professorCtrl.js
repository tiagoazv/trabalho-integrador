const db = require('../db');
const logger = require('../logger');
const bcrypt = require('bcrypt');

exports.getProfessor = async (req, res) => {
  try {
    const professor = await db.any('SELECT * FROM professor');
    res.json(professor);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getProfessorLogin = async (req, res) => {
  try {
    const professor = await db.oneOrNone('SELECT senha FROM professor WHERE username = $1', [req.params.username]);
    if (professor) {
      const isMatch = await bcrypt.compare(req.body.senha, professor.senha);
      if (isMatch) {
        res.status(200).json({ message: 'Login bem-sucedido' });
      } else {
        res.status(401).send('Senha incorreta');
      }
    } else {
      res.status(404).send('Professor não encontrado');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getProfessorById = async (req, res) => {
  try {
    const professor = await db.oneOrNone('SELECT * FROM professor WHERE id = $1', [req.params.id]);
    if (professor) {
      res.json(professor);
    } else {
      res.status(404).send('Professor não encontrado');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createProfessor = async (req, res) => {
  try {
    const { id, nome, telefone, email, endereco, username, senha } = req.body;
    const hashedPassword = await bcrypt.hash(senha, 10);
    logger.info("Create Body: " + JSON.stringify(req.body));
    const newProfessor = await db.one(
      'INSERT INTO professor (nome, telefone, email, endereco, username, senha) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [nome, telefone, email, endereco, username, hashedPassword]
    );
    res.json(newProfessor);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateProfessor = async (req, res) => {
  try {
    const {nome, telefone, email, endereco, username, senha } = req.body;
    const hashedPassword = await bcrypt.hash(senha, 10);
    logger.info("Update Body: " + JSON.stringify(req.body));
    const updatedProfessor = await db.one(
      'UPDATE professor SET nome = $1, telefone = $2, email = $3, endereco = $4, username = $5, senha = $6 WHERE id = $7 RETURNING *',
      [nome, telefone, email, endereco, username, hashedPassword, req.params.id]
    );
    res.json(updatedProfessor);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteProfessor = async (req, res) => {
  try {
    logger.info("Delete Id: " + JSON.stringify(req.params.id));
    await db.none('DELETE FROM professor WHERE id = $1', [req.params.id]);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};
