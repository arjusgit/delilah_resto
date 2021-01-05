module.exports = (sequelize, type) => {
    return sequelize.define('pedido', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        cantidad: {
            type: type.INTEGER,
            allowNull: false
        },
        hora: {
            type: type.TIME,
            allowNull: false
        },
        numeroPedido: {
            type: type.INTEGER,
            allowNull: false
        },
        descripcion: {
            type: type.STRING,
            allowNull: false
        },
        monto: {
            type: type.INTEGER,
            allowNull: false
        }
    })
}