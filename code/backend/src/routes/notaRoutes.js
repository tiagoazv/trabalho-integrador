const express = require('express');
const notaCtrl = require('../controllers/notaCtrl');

const router = express.Router();

router.get('/', notaCtrl.getNota);
router.get('/:id', notaCtrl.getNotaById);
router.post('/', notaCtrl.createNota);
router.put('/:id', notaCtrl.updateNota);
router.delete('/:id', notaCtrl.deleteNota);

module.exports = router;