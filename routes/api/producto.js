const router = require('express').Router();

const productosController = require('../../controllers/productos');

router.get('/', productosController.listarProductos);

module.exports = router;