const { Usuario } = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.crearUsuario = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.salt = salt;
    req.body.password = hashedPassword;
    // console.log(salt);
    // console.log(hashedPassword);
    const usuarioRegistrado = await Usuario.findOne({
      where: { email: req.body.email },
    });
    if (!usuarioRegistrado) {
      const crearUsuario = await Usuario.create(req.body);
      res
        .status(201).send( {msg: "✅ Usuario registrado con éxito", datos: crearUsuario });
    } else {
      res
        .status(400).send("⛔️ Ya existe un usuario registrado con este email");
    }
  } catch {
    res
      .status(500)
      .send({ error: "⚠️ Ocurrió un error en el registro" });
  }
};

exports.login = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({
      where: { nombreUsuario: req.body.nombreUsuario },
    });
    if (usuario) {
      const iguales = bcrypt.compareSync(req.body.password, usuario.password);
      if (iguales) {
        let tokenAcceso = generarTokenAcceso(usuario);
        res.status(200).send({
          msg: "✅ Sesión iniciada con éxito",
          usuario: usuario.nombreUsuario,
          token: tokenAcceso,
        });
      } else {
        res
          .status(401)
          .send({ error: "⛔️ El usuario y/o contraseña son incorrectos" });
      }
    } else {
      res
        .status(401)
        .send({ error: "⛔️ No hay usuarios registrados que coincidan con estos datos" });
    }
  } catch (e) {
    res
    .status(500)
    .send({ error: e.message, stack: e.stack });
}
  } 

exports.listarUsuarios = async (req, res) => {
  const usuarios = await Usuario.findAll();
  if (usuarios.length > 0) {
    res.status(200).send(usuarios);
  } else {
    res.send({
      msg: "No hay usuarios registrados",
    });
  }
};

function generarTokenAcceso (usuario) {
  return jwt.sign(usuario.toJSON(), process.env.TOKEN_SECRETO);
}

// como recibir parametros del error en el catch