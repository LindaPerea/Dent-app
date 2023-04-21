const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const User = require('./User');


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

User.hasMany(Appointment);
Appointment.belongsTo(User);

Appointment.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());
  return values;
};

module.exports = Appointment;
