const express = require('express');
const userRouter = require('./user.routes');
const dateRouter = require('./date.routes');
const router = express.Router();

// colocar las rutas aquí
router.use("/users", userRouter);
router.use("/dates", dateRouter);

module.exports = router;