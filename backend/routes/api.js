const express = require('express');
const router = express.Router();
const personaController = require('../controllers/personaController');
const usuarioController = require('../controllers/usuarioController');

// Rutas para "persona"
router.get('/personas', personaController.getAll);
router.post('/personas', personaController.create);
router.put('/personas/:dni', personaController.update);
router.delete('/personas/:dni', personaController.delete);

//Rutas para "usuario"
router.get('/usuarios', usuarioController.getAll);
router.post('/usuarios', usuarioController.create);
router.put('/usuarios/:mail', usuarioController.update);
router.delete('/usuarios/:mail', usuarioController.delete);

// Rutas personalizadas
router.get('/personas/byApellido/:apellido', personaController.getByApellido);
router.get('/usuarios/byEmail/:mail', usuarioController.getByEmail);

module.exports = router;
