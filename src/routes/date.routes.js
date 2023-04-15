const { Router } = require("express");
const { getAll, create } = require("../controllers/date.controllers");
const verifySchema = require('../schemas/joiSchema.checker');
const { createDateSchema } = require("../schemas/date.schema");

const dateRouter = Router();


dateRouter.route('/')
  .get(getAll)
  .post(verifySchema(createDateSchema), create)

module.exports = dateRouter;