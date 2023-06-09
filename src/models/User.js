const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
// const Appointment = require('./Appointment');

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profileType: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// User.hasMany(Appointment, { foreignKey: "userId"});
// Appointment.belongsTo(User, { foreignKey: "userId"});

// aqui es donde se coloca para que no aparezca la contraseña en ningun lado
User.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());
  delete values.password;
  // delete values.profileType;
  return values;
};

module.exports = User;
