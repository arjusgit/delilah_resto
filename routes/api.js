//Gestor de rutas /API. 

const router = require('express').Router();

const apiRolRouter = require('./api/rol');
const apiUsuarioRouter = require('./api/usuario');
const apiProductoRouter = require('./api/producto');

router.use('/rol', apiRolRouter);
router.use('/usuario', apiUsuarioRouter);
router.use('/producto', apiProductoRouter);

module.exports = router;