const router = require('express').Router();

const rolesController = require('../../controllers/roles');

router.get('/', rolesController.listarRoles);

module.exports = router;

