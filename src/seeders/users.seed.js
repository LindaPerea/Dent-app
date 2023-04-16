const User = require("../models/User");
const bcrypt = require('bcrypt');

const users = [
  {
    email: "linda@gnail.com",
    firstName: "Linda",
    lastName: "Perea",
    password: "123456",
    profileType: 0,
  },
  {
    email: "alex@gmail.com",
    firstName: "Alex",
    lastName: "Tandioy",
    password: "654321",
    profileType: 0,
  },
  {
    email: "pipe@email.com",
    firstName: "Pipe",
    lastName: "Per",
    password: "123456",
    profileType: 1,
  },
  {
    email: "pepe@gmail.com",
    firstName: "Pepe",
    lastName: "Pere",
    password: "654321",
    profileType: 1,
  },
  {
    email: "pedro@gmail.com",
    firstName: "Pedro",
    lastName: "Tan",
    password: "123456",
    profileType: 1,
  }
];


const usersSeed = async () => {
  await users.forEach(async item => {
    item.password = await bcrypt.hash(item.password, 10);
    await User.create(item);
  });
};

module.exports = {
  usersSeed
}