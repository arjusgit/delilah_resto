module.exports = (sequelize, type) => {
    return sequelize.define('pedidoProducto', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        pedido_id: {
            type: type.INTEGER,
            allowNull: false
        },
        producto_id: {
            type: type.INTEGER,
            allowNull: false
        },
        cantidad: {
            type: type.INTEGER,
            allowNull: false
        }
    })
}