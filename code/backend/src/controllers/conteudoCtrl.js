const db = require('../db');
const logger = require('../logger');

exports.getConteudo = async (req, res) => {
  try {
    const conteudo = await db.any('SELECT * FROM conteudo');
    res.json(conteudo);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getConteudoById = async (req, res) => {
  try {
    const conteudo = await db.oneOrNone('SELECT * FROM conteudo WHERE id = $1', [req.params.id]);
    if (conteudo) {
      res.json(conteudo);
    } else {
      res.status(404).send('Conteudo não encontrado');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
//id, nome, qtaulasprevistas, descr
exports.createConteudo = async (req, res) => {
  try {
    const { id, nome, qtaulasprevistas, descr } = req.body;
    parseInt(qtaulasprevistas)
    const newConteudo = await db.one(
      'INSERT INTO conteudo (nome, qtaulasprevistas, descr) VALUES ($1, $2, $3) RETURNING *',
      [nome, qtaulasprevistas, descr]
    );
    res.json(newConteudo);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateConteudo = async (req, res) => {
  try {
    const { id, nome, qtaulasprevistas, descr } = req.body;
    parseInt(qtaulasprevistas)
    const updatedConteudo = await db.one(
      'UPDATE conteudo SET nome = $1, qtaulasprevistas = $2, descr = $3 WHERE id = $4 RETURNING *',
      [ nome, qtaulasprevistas, descr, req.params.id]
    );
    res.json(updatedConteudo);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteConteudo = async (req, res) => {
  try {
    await db.none('DELETE FROM conteudo WHERE id = $1', [req.params.id]);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};
