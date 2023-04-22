const Appointment = require('../models/Appointment');

const dates = [
  { userId: 1, day: '15/04/2023', hour: '21:00:00' },
  { userId: 2, day: '15/04/2023', hour: '21:00:00' },
  { userId: 3, day: '15/04/2023', hour: '21:00:00' },
  { userId: 4, day: '15/04/2023', hour: '21:00:00' },
  { userId: 5, day: '15/04/2023', hour: '21:00:00' },
];

const dateSeed = async () => {
  await Promise.all(
    dates.map(async (item) => {
      await Appointment.create(item);
    })
  )
};

module.exports = {
  dateSeed,
};
