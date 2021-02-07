const express = require('express');

const router = express.Router();

const adminController = require('../../controllers/admin');

router.get('/rol', adminController.listarRoles);

router.post('/rol', adminController.crearRoles);

router.put('/rol', adminController.modificarRoles);

router.delete('/rol', adminController.eliminarRoles);

router.post('/producto', adminController.crearProducto);

router.put('/producto', adminController.modificarProducto);

router.delete('/producto', adminController.eliminarProducto);

router.get('/usuario', adminController.listarUsuarios);


module.exports = router;