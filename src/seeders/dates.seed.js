const Date = require("../models/Date")

const dates = [
  { userId: 1, appointmentDate: '15/04/2023' },
  { userId: 2, appointmentDate: '15/04/2023' },
  { userId: 3, appointmentDate: '15/04/2023' },
  { userId: 4, appointmentDate: '15/04/2023' },
  { userId: 5, appointmentDate: '15/04/2023' },
];

const dateSeed = async () => {
  await dates.forEach(async item => {
    await Date.create(item);
  });
  return ''
};

module.exports = {
  dateSeed
}