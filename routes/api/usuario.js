const router = require('express').Router();

const usuariosController = require('../../controllers/usuarios');

router.get('/', usuariosController.listarUsuarios);

router.post('/login', usuariosController.login);

router.post('/registro', usuariosController.crearUsuario);

module.exports = router;






// const router = require('express').Router();

// const { Rol } = require('../../db');

// router.post('/', async(req, res) => {
//     const rol = await Rol.create(req.body);
//     res.json(rol);
// });

// router.get('/', async (req, res) => {
//     const roles = await Rol.findAll();
//     //con findAll hace un array de todos los films y
//     //con res.json me transforma ese array en json
//     res.json(roles);
// });

// module.exports = router;