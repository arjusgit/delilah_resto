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

exports.crearProducto = async (req, res) => {
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
