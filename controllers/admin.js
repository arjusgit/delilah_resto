const { Rol } = require("../db");
const { Producto } = require("../db");
const { Usuario } = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//chequear en la base si esta registrado ese token
//si es asi, chequear si tiene rol_id 1 o 2

//// AUTENTICACION ////

// exports.authRol = (rol) => {
//   return (req, res, next) => {
//     if (req.user.rol !== rol)  {
//       res.status(401)
//       return res.send('Acceso prohibido');
//     }
//   }
// }

////////ROLES///////////

exports.listarRoles = async (req, res, next) => {
  const roles = await Rol.findAll();
  //con findAll hace un array de todos los films y
  //con res.json me transforma ese array en json
  res.json(roles);
};

exports.crearRoles = async (req, res, next) => {
  const rol = await Rol.create(req.body);
  res.json({msg: "✅ Rol registrado con éxito", datos: rol });
};

exports.modificarRoles = async (req, res, next  ) => {
  const rol = await Rol.update(req.body);
  res.json(rol);
};

exports.eliminarRoles = async (req, res, next) => {
  const rol = await Rol.destroy(req.body);
  res.json(rol);
};

////////PRODUCTOS///////////

exports.crearProducto = async (req, res, next) => {
  const productoRegistrado = await Producto.findOne({
    where: { titulo: req.body.titulo },
  });
  if (!productoRegistrado) {
    const producto = await Producto.create(req.body);
    res.status(201).send(producto);
  } else {
    res
      .status(500)
      .send({ error: "⚠️ Ya existe un producto registrado con ese título" });
  }
};

exports.modificarProducto = async (req, res, next) => {
  const productoRegistrado = await Producto.findOne({
    where: { titulo: req.body.titulo },
  });
  if (productoRegistrado) {
    const modificar = await Producto.update(req.body);
    res.status(200).send({ msg: "✅ Producto modificado con éxito" });
  } else {
    res.status(500).send({
      error: "⚠️ El producto con ese título no fue creado o ya fue eliminado",
    });
  }
};

exports.eliminarProducto = async (req, res) => {
  const productoRegistrado = await Producto.findOne({
    where: { titulo: req.body.titulo },
  });

  if (productoRegistrado) {
    await productoRegistrado.destroy(req.body);
    res.status(200).send({ msg: "✅ Producto eliminado con éxito" });
  } else {
    res.status(500).send({
      error: "⚠️ El producto con ese título no fue creado o ya fue eliminado",
    });
  }
};

//USUARIOS

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
