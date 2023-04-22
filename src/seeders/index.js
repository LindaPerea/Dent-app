const sequelize = require('../utils/connection');
const { dateSeed } = require('./appointments.seed');
const { usersSeed } = require('./users.seed');

const seeders = async () => {
  await sequelize.sync({ force: true });
  await usersSeed();
  await dateSeed();

  console.log('fin del seed');
};



seeders();

module.exports = seeders;
