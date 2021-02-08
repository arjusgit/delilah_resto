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

exports.modificarProducto = async (req, res) => {
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