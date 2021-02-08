const { Rol } = require("../db");
require("dotenv").config();

exports.listarRoles = async (req, res) => {
  const roles = await Rol.findAll();
  //con findAll hace un array de todos los films y
  //con res.json me transforma ese array en json
  res.json(roles);
};

exports.crearRoles = async (req, res) => {
  try {
    const rol = await Rol.create(req.body);
    res.json({ msg: "✅ Rol registrado con éxito", datos: rol });
  } catch (e) {
    res.status(500).send({ error: e.message, stack: e.stack });
  }
};

exports.modificarRoles = async (req, res) => {
  const rol = await Rol.update(req.body);
  res.json(rol);
};

exports.eliminarRoles = async (req, res) => {
  const rol = await Rol.destroy(req.body);
  res.json(rol);
};

