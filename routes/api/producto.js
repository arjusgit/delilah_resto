const router = require('express').Router();

const productosController = require('../../controllers/productos');
const authController = require('../../controllers/auth');

router.get('/', authController.autenticarToken, productosController.listarProductos);
router.get('/:productoId', authController.autenticarToken, productosController.obtenerProductoPorId);
router.post('/', authController.autenticarAdmin, productosController.crearProducto);
router.put('/:productoId', authController.autenticarAdmin, productosController.modificarProducto);
router.delete('/', authController.autenticarAdmin, productosController.eliminarProducto);

module.exports = router;