const { Router } = require("express");
const { getAll, create, getById, getAppointments, deleteById } = require("../controllers/date.controllers");
const verifyJWT = require('../utils/verifyJWT');
const verifySchema = require('../schemas/joiSchema.checker');
const { createAppointmentSchema } = require("../schemas/date.schema");
const { verifyAdministrator } = require("../middlewares/VerifyAdministrator");
const { verifyIsTheSameUser } = require("../middlewares/verifyIsTheSameUser");

const dateRouter = Router();

// For new routes the user id must be placed in params as userId
dateRouter.route('/')
  .get(verifyJWT, verifyAdministrator, getAll)
  .post(verifySchema(createAppointmentSchema, 'body'), verifyJWT, create)
dateRouter.route('/appointments')
  .get(verifyJWT, verifyIsTheSameUser, verifyAdministrator, getAppointments)
dateRouter.route('/:id')
  .get(verifyJWT, verifyIsTheSameUser, verifyAdministrator, getById)
  .delete(verifyJWT, verifyIsTheSameUser, verifyAdministrator, deleteById)
module.exports = dateRouter;