const express = require('express');
const userRouter = require('./user.routes');
const appointmentsRouter = require('./appointment.routes');
const router = express.Router();

// colocar las rutas aquí
router.use('/', (req, res) => {
  res.json({ message: 'estas en la api' });
});
router.use('/users', userRouter);
router.use('/appointments', appointmentsRouter);

module.exports = router;
