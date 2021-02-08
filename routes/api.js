//Gestor de rutas /API. 

const router = require('express').Router();

const apiAdminRouter = require('./api/admin');
const apiUsuarioRouter = require('./api/usuario');
const apiProductoRouter = require('./api/producto');

router.use('/admin', apiAdminRouter);
router.use('/usuario', apiUsuarioRouter);
router.use('/producto', apiProductoRouter);

module.exports = router;