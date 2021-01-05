module.exports = (sequelize, type) => {
  const Rol = sequelize.define("rol", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    descripcion: {
        type: type.STRING,
        allowNull: false
    },
  });

  return Rol;
};
