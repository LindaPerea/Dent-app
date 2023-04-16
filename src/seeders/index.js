const sequelize = require("../utils/connection");
const { dateSeed } = require("./dates.seed");
const { usersSeed } = require("./users.seed");


const seeders = async () => {
  await sequelize.sync({ force: true });
  await usersSeed();
  await dateSeed();
  console.log('fin del seed');
};

seeders()