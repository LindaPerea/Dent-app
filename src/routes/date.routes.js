const { Router } = require("express");
const { getAll, create, getById, getAppointments } = require("../controllers/date.controllers");
const verifyJWT = require('../utils/verifyJWT');
const verifySchema = require('../schemas/joiSchema.checker');
const { createDateSchema } = require("../schemas/date.schema");

const dateRouter = Router();


dateRouter.route('/')
  .get(getAll)
  .post(verifySchema(createDateSchema, 'body'), verifyJWT, create)
dateRouter.route('/appointments')
  .get(getAppointments)
dateRouter.route('/:id')
  .get(getById)
module.exports = dateRouter;