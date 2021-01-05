const router = require('express').Router();

const productosController = require('../../controllers/productos');

router.get('/', productosController.listarProductos);

router.post('/', productosController.crearProducto);

module.exports = router;