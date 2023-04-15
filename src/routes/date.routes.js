const { Router } = require("express");
const { getAll, create } = require("../controllers/date.controllers");


const dateRouter = Router();


dateRouter.route('/')
  .get(getAll)
  .post(create)

module.exports = dateRouter;