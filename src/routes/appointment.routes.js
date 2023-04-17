const { Router } = require('express');
const {
  getAll,
  create,
  getById,
  getAppointments,
  deleteById,
} = require('../controllers/appointment.controllers');
const verifyJWT = require('../utils/verifyJWT');
const verifySchema = require('../schemas/joiSchema.checker');
const { createAppointmentSchema } = require('../schemas/appointment.schema');
const { verifyAdministrator } = require('../middlewares/VerifyAdministrator');
const { verifyIsTheSameUser } = require('../middlewares/verifyIsTheSameUser');

const appointmentRouter = Router();

// For new routes the user id must be placed in params as userId
appointmentRouter
  .route('/')
  .get(verifyJWT, verifyAdministrator, getAll)
  .post(verifySchema(createAppointmentSchema, 'body'), verifyJWT, create);
appointmentRouter
  .route('/:userId')
  .get(verifyJWT, verifyIsTheSameUser, verifyAdministrator, getAppointments);
appointmentRouter
  .route('/:id')
  .get(verifyJWT, verifyIsTheSameUser, verifyAdministrator, getById)
  .delete(verifyJWT, verifyIsTheSameUser, verifyAdministrator, deleteById);

module.exports = appointmentRouter;
