const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  // process.env.DATABASE_URL
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  dialect: 'postgres',
  logging: false,
  // dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
});

module.exports = sequelize;
