const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const ModelName = sequelize.define('modelName', {
    userId: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = ModelName;
