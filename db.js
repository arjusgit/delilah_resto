const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const usuarioModel = require("./models/usuario");
const rolModel = require("./models/rol");
const productoModel = require("./models/producto");
const pedidoProductoModel = require("./models/pedidoProducto");
const pedidoModel = require("./models/pedido");
const formaPagoModel = require("./models/formaPago");
const estadoModel = require("./models/estado");
const rol = require("./models/rol");
const formaPago = require("./models/formaPago");

//instancia Sequelize para conectar con la DB
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
    define: {
      timestamps: false,
      freezeTableName: true,
      underscored: true
    },
  }
);

const Usuario = usuarioModel(sequelize, Sequelize);
const Rol = rolModel(sequelize, Sequelize);
const Producto = productoModel(sequelize, Sequelize);
const pedidoProducto = pedidoProductoModel(sequelize, Sequelize);
const Pedido = pedidoModel(sequelize, Sequelize);
const FormaPago = formaPagoModel(sequelize, Sequelize);
const Estado = estadoModel(sequelize, Sequelize);

// Relaciones y ForeignKeys

Rol.hasMany(Usuario, { foreignKey: { allowNull: false }, constraints: true, onDelete: 'CASCADE'});
Usuario.hasMany(Pedido, { foreignKey: { allowNull: false }, constraints: true, onDelete: 'CASCADE'} );
Producto.hasMany(pedidoProducto, { foreignKey: { allowNull: false }, constraints: true, onDelete: 'CASCADE'} );
Pedido.hasMany(pedidoProducto, { foreignKey: { allowNull: false }, constraints: true, onDelete: 'CASCADE'} );
FormaPago.hasMany(Pedido, { foreignKey: { allowNull: false }, constraints: true, onDelete: 'CASCADE'} );
Estado.hasMany(Pedido, { foreignKey: { allowNull: false }, constraints: true, onDelete: 'CASCADE'} );

sequelize
  .sync({ force: false })
  .then(() => console.log("✅ Tablas sincronizadas"))
  .catch((err) => console.error("⛔️ Error al sincronizar las tablas"));

module.exports = {
  Usuario,
  Rol,
  Producto,
  pedidoProducto,
  Pedido,
  FormaPago,
  Estado,
};

