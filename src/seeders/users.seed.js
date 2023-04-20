const User = require('../models/User');
const bcrypt = require('bcrypt');

const users = [
  {
    email: 'linda.hp@hotmail.com',
    firstName: 'Linda',
    lastName: 'Perea',
    phoneNumber: '123456789',
    password: '123456',
    profileType: 0,
  },
  {
    email: 'tato.tandioy@gmail.com',
    firstName: 'Alex',
    lastName: 'Tandioy',
    phoneNumber: '123456789',
    password: '654321',
    profileType: 0,
  },
  {
    email: 'santiagoruiz9416@gmail.com',
    firstName: 'Santiago',
    lastName: 'Ruiz',
    phoneNumber: '123456789',
    password: 'santi2307',
    profileType: 0,
  },
  {
    email: 'pipe@email.com',
    firstName: 'Pipe',
    lastName: 'Per',
    phoneNumber: '123456789',
    password: '123456',
    profileType: 1,
  },
  {
    email: 'pepe@gmail.com',
    firstName: 'Pepe',
    lastName: 'Pere',
    phoneNumber: '123456789',
    password: '654321',
    profileType: 1,
  },
  {
    email: 'pedro@gmail.com',
    firstName: 'Pedro',
    lastName: 'Tan',
    phoneNumber: '123456789',
    password: '123456',
    profileType: 1,
  },
];

const usersSeed = async () => {
  await users.forEach(async (item) => {
    item.password = await bcrypt.hash(item.password, 10);
    await User.create(item);
  });
};

module.exports = {
  usersSeed,
};
