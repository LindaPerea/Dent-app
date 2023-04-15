const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Date = sequelize.define('date', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    appointmentDate: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

Date.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());
    return values;
};

module.exports = Date;