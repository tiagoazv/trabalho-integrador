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
//id, nome, qtaulasprevistas, desc
exports.createConteudo = async (req, res) => {
  try {
    const { id, nome, qtaulasprevistas, desc } = req.body;
    logger.info("Create Body: " + JSON.stringify(req.body));
    const newConteudo = await db.one(
      'INSERT INTO conteudo (id, nome, qtaulasprevistas, desc) VALUES ($1, $2, $3, $4) RETURNING *',
      [id, nome, qtaulasprevistas, desc]
    );
    res.json(newConteudo);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateConteudo = async (req, res) => {
  try {
    const { id, nome, qtaulasprevistas, desc } = req.body;
    logger.info("Update Body: " + JSON.stringify(req.body));
    const updatedConteudo = await db.one(
      'UPDATE conteudo SET nome = $1, qtaulasprevistas = $2, desc = $3 WHERE id = $4 RETURNING *',
      [ nome, qtaulasprevistas, desc, req.params.id]
    );
    res.json(updatedConteudo);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteConteudo = async (req, res) => {
  try {
    logger.info("Delete Id: " + JSON.stringify(req.params.id));
    await db.none('DELETE FROM conteudo WHERE id = $1', [req.params.id]);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};
