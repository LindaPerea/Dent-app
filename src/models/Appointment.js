const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Appointment = sequelize.define('appointment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  day: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hour: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Appointment.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());
  return values;
};

module.exports = Appointment;
