module.exports = (sequelize, type) => {
    return sequelize.define('producto', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        titulo: {
            type: type.STRING,
            allowNull: false
        },
        descripcion: {
            type: type.STRING,
            allowNull: false
        },
        precio: {
            type: type.INTEGER,
            allowNull: false
        }
    })
}

