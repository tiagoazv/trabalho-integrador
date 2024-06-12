const express = require('express');
const alunoCtrl = require('../controllers/alunoCtrl');

const router = express.Router();

router.get('/', alunoCtrl.getAluno);
router.get('/:id', alunoCtrl.getAlunoById);
router.post('/', alunoCtrl.createAluno);
router.put('/:id', alunoCtrl.updateAluno);
router.delete('/:id', alunoCtrl.deleteAluno);

module.exports = router;