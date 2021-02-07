module.exports = (sequelize, type) => {
  const Usuario = sequelize.define("usuario", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombreUsuario: {
      type: type.STRING,
      isAlphanumeric: true,
      allowNull: false,
    },
    nombreCompleto: {
      type: type.STRING,
      allowNull: false,
    },
    email: {
      type: type.STRING,
      allowNull: false,
      unique: true,
    },
    telefono: {
      type: type.INTEGER,
      allowNull: false,
    },
    direccion: {
      type: type.STRING,
      allowNull: false,
    },
    password: {
      type: type.STRING,
      isAlphanumeric: true,
      allowNull: false,
    },
    salt: {
      type: type.STRING,
      isAlphanumeric: true,
      allowNull: false,
    }
    // rolId: type.INTEGER,
  });

  return Usuario;
};
