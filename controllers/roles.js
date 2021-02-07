const { Rol } = require('../db');

exports.listarRoles = async (req, res) => {
    const roles = await Rol.findAll();
    //con findAll hace un array de todos los films y
    //con res.json me transforma ese array en json
    res.json(roles);
}

