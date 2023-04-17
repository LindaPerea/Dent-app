const express = require('express');
const userRouter = require('./user.routes');
const appointmentsRouter = require('./appointment.routes');
const router = express.Router();

// colocar las rutas aquí
router.use('/users', userRouter);
router.use('/appointments', appointmentsRouter);

module.exports = router;
