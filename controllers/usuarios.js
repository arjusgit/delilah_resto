const { Usuario } = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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

exports.login = async (req, res) => {
  const usuario = await Usuario.findOne({
    where: { username: req.body.username },
  });
  if (usuario) {
    const iguales = bcrypt.compareSync(req.body.password, usuario.password);
    if (iguales) {
      let token = jwt.sign({ username: usuario.username }, process.env.TOKEN);
      res.status(200).send({
        msg: "✅ Sesión iniciada con éxito",
        user: usuario.username,
        token: token,
      });
    } else {
      res
        .status(401)
        .send({ error: "⛔️ El usuario y/o contraseña son incorrectos" });
    }
  } else {
    res
      .status(401)
      .send({ error: "⛔️ El usuario y/o contraseña son incorrectos" });
  }
};

exports.crearUsuario = async (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  const usuarioRegistrado = await Usuario.findOne({
    where: { email: req.body.email },
  });
  if (!usuarioRegistrado) {
    const crearUsuario = await Usuario.create(req.body);
    res.status(201).send(crearUsuario);
  } else {
    res
      .status(500)
      .send({ error: "⚠️ Ya existe un usuario registrado con este email" });
  }
};
