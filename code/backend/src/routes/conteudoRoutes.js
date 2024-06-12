const express = require('express');
const conteudoCtrl = require('../controllers/conteudoCtrl');

const router = express.Router();

router.get('/', conteudoCtrl.getConteudo);
router.get('/:id', conteudoCtrl.getConteudoById);
router.post('/', conteudoCtrl.createConteudo);
router.put('/:id', conteudoCtrl.updateConteudo);
router.delete('/:id', conteudoCtrl.deleteConteudo);

module.exports = router;