const router = require('express').Router();

const usuariosController = require('../../controllers/usuarios');
const authController = require('../../controllers/auth');

router.post('/login', usuariosController.login);

router.post('/registro', usuariosController.crearUsuario);

router.get('/usuario', authController.autenticarAdmin, usuariosController.listarUsuarios);


module.exports = router;



