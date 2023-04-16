const Date = require("../models/Date");
const catchError = require("../utils/catchError");

const getAll = catchError(async (req, res) => {
  try {
    const results = await Date.findAll();
    return res.json(results)
  } catch (error) {
    throw error;
  }
});

const create = catchError(async (req, res) => {
  try {
    const { appointmentDate } = req.body;
    const { user } = req;
    const createDate = { appointmentDate, userId: user.id }
    const result = Date.create(createDate);
    if (!result) return res.status(401).json({ message: 'Fallo al crear la cita' })
    return res.status(201).json({ message: 'Se creo con exito' })
  } catch (error) {
    throw error
  }
});

const getById = catchError(async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Date.findOne({ where: { id } });
    if (!result) return res.status(404).json({ message: 'Not Found Date', id });
    res.json(result);
  } catch (error) {
    throw error;
  }
});

const getAppointments = catchError(async (req, res) => {
  try {
    const { userId } = req.body
    const result = await Date.findOne({ where: { userId } });
    if (!result) return res.status(404).json({ message: 'Not Found appointments', user: userId });
    res.json(result)
  } catch (error) {
    throw error
  }
});

module.exports = {
  getAll,
  create,
  getById,
  getAppointments
}