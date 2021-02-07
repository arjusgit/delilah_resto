const { Producto } = require("../db");

exports.listarProductos = async (req, res) => {
  const productos = await Producto.findAll();
  if (productos.length > 0) {
    res.status(200).send(productos);
  } else {
    res.send({
      msg: "No hay productos registrados",
    });
  }
};
