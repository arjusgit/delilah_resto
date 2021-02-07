const router = require('express').Router();

const usuariosController = require('../../controllers/usuarios');

router.post('/login', usuariosController.login);

router.post('/registro', usuariosController.crearUsuario);

module.exports = router;



