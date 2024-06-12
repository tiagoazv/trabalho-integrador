const db = require('../db');
const logger = require('../logger');

exports.getNota = async (req, res) => {
  try {
    const nota = await db.any('SELECT * FROM nota');
    res.json(nota);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getNotaById = async (req, res) => {
  try {
    const nota = await db.oneOrNone('SELECT * FROM nota WHERE id = $1', [req.params.id]);
    if (nota) {
      res.json(nota);
    } else {
      res.status(404).send('Nota não encontrado');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
//id, idaluno, idconteudo, nota, qtaulas, dataini, datafim
exports.createNota = async (req, res) => {
  try {
    const { id, idaluno, idconteudo, nota, qtaulas, dataini, datafim } = req.body;
    logger.info("Create Body: " + JSON.stringify(req.body));
    const newNota = await db.one(
      'INSERT INTO nota (id, idaluno, idconteudo, nota, qtaulas, dataini, datafim) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [id, idaluno, idconteudo, nota, qtaulas, dataini, datafim]
    );
    res.json(newNota);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateNota = async (req, res) => {
  try {
    const { id, idaluno, idconteudo, nota, qtaulas, dataini, datafim } = req.body;
    logger.info("Update Body: " + JSON.stringify(req.body));
    const updatedNota = await db.one(
      'UPDATE nota SET idaluno = $1, idconteudo = $2, nota = $3, qtaulas = $4, dataini = $5, datafim = $6 WHERE id = $7 RETURNING *',
      [idaluno, idconteudo, nota, qtaulas, dataini, datafim, req.params.id]
    );
    res.json(updatedNota);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteNota = async (req, res) => {
  try {
    logger.info("Delete Id: " + JSON.stringify(req.params.id));
    await db.none('DELETE FROM nota WHERE id = $1', [req.params.id]);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};