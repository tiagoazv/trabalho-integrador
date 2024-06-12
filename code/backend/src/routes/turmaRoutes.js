const express = require('express');
const turmaCtrl = require('../controllers/turmaCtrl');

const router = express.Router();

router.get('/', turmaCtrl.getTurma);
router.get('/:id', turmaCtrl.getTurmaById);
router.post('/', turmaCtrl.createTurma);
router.put('/:id', turmaCtrl.updateTurma);
router.delete('/:id', turmaCtrl.deleteTurma);

module.exports = router;