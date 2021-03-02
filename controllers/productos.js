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

exports.obtenerProductoPorId = async (req, res) => {
  const productoEncontrado = await Producto.findOne({
    where: { id: req.params.productoId },
  });
  if (productoEncontrado) {
    res.status(200).send(productoEncontrado);
  } else {
    res.send({
      msg: "El id no corresponde a un producto registrado",
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

exports.modificarProducto = async (req, res) => {
  const productoRegistrado = await Producto.findOne({
    where: { id: req.params.productoId },
  });
  if (productoRegistrado) {
    await Producto.update(
      req.body,
      { where: { id: req.params.productoId } }
    );
    res.status(200).send({ msg: "✅ Producto modificado con éxito" });
  } else {
    res.status(500).send({
      error: "⚠️ El producto con ese título no fue creado o ya fue eliminado",
    });
  }
};

exports.eliminarProducto = async (req, res) => {
  const productoRegistrado = await Producto.findOne({
    where: { id: req.body.id },
  });
  if (productoRegistrado) {
    await productoRegistrado.destroy(productoRegistrado);
    res.status(200).send({ msg: "✅ Producto eliminado con éxito" });
  } else {
    res.status(500).send({
      error:
        "⚠️ El producto con ese id no fue creado o fue eliminado anteriormente",
    });
  }
};
