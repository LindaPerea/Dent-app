const Date = require("../models/Date");
const catchError = require("../utils/catchError");

const getAll = catchError(async (req, res) => {
  const results = await Date.findAll();
  console.log(results);
  return res.json(results)
});

const create = catchError(async (req, res) => {
  const { appointmentDate } = req.body;
  const { user } = req;
  const createDate = { appointmentDate, userId: user.id }
  const result = Date.create(createDate);
  if (!result) return res.status(401).json({ message: 'Fallo al crear la cita' })
  return res.status(201).json(result)
});


module.exports = {
  getAll,
  create
}