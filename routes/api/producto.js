const router = require('express').Router();

const productosController = require('../../controllers/productos');
const authController = require('../../controllers/auth');

router.get('/', authController.autenticarToken, productosController.listarProductos);
router.post('/', authController.autenticarAdmin, productosController.crearProducto);
router.put('/', authController.autenticarAdmin, productosController.modificarProducto);
router.delete('/', authController.autenticarAdmin, productosController.eliminarProducto);

module.exports = router;