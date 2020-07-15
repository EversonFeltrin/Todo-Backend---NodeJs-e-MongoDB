// importa o express
const express = require('express');

// usa do express o Router - identifica as rotas que chegam aqui
const router = express.Router();

// importa o controller para task
const TaskController = require('../controllers/TaskController');

const TaskValidation = require('../middlewares/TaskValidation');

// quando chega post na raiz chama controller
router.post ('/', TaskValidation, TaskController.create);
router.put('/:id', TaskValidation, TaskController.update);


// exporta para fora 
module.exports = router;