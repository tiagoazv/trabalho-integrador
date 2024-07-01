const express = require('express');
const professorCtrl = require('../controllers/professorCtrl');

const router = express.Router();

router.get('/', professorCtrl.getProfessor);
router.get('/:id', professorCtrl.getProfessorById);
router.get('/login/:username', professorCtrl.getProfessorLogin);
router.post('/', professorCtrl.createProfessor);
router.put('/:id', professorCtrl.updateProfessor);
router.delete('/:id', professorCtrl.deleteProfessor);

module.exports = router;