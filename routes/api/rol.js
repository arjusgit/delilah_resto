const router = require('express').Router();

const rolesController = require('../../controllers/roles');

router.get('/', rolesController.listarRoles);

router.post('/', rolesController.crearRoles);

module.exports = router;
