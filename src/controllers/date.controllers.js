const Date = require("../models/Date");
const catchError = require("../utils/catchError");

const getAll = catchError(async (req, res) => {
  const results = await Date.findAll();
  return res.json(results)
});

const create = catchError(async (req, res) => {
  const body = req.body;
  const result = Date.create(body);
  return res.status(201).json(result)
});


module.exports = {
  getAll,
  create
}