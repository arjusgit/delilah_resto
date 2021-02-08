const express = require('express');

const router = express.Router();

const adminController = require('../../controllers/admin');
const authController = require('../../controllers/auth');

router.get('/rol', authController.autenticarAdmin, adminController.listarRoles);

router.post('/rol', authController.autenticarAdmin, adminController.crearRoles);

router.put('/rol', authController.autenticarAdmin, adminController.modificarRoles);

router.delete('/rol', authController.autenticarAdmin, adminController.eliminarRoles);


module.exports = router;

