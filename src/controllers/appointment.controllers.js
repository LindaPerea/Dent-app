const Appointment = require('../models/Appointment');
const catchError = require('../utils/catchError');

const getAll = catchError(async (req, res, next) => {
  try {
    const results = await Appointment.findAll();
    console.log(results);
    return res.json(results);
  } catch (error) {
    next(error);
  }
});

const create = catchError(async (req, res, next) => {
  try {
    const { day, hour } = req.body;
    const { user } = req;
    const createDate = { day, hour, userId: user.id };
    const result = Appointment.create(createDate);
    if (!result) return res.status(401).json({ message: 'Fallo al crear la cita' });
    return res.status(201).json({ message: 'Se creo con exito' });
  } catch (error) {
    next(error);
  }
});

const getById = catchError(async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Appointment.findOne({ where: { id } });
    if (!result) return res.status(404).json({ message: 'Not Found Date', id });
    return res.json({ result });
  } catch (error) {
    next(error);
  }
});

const getAppointments = catchError(async (req, res, next) => {
  try {
    const { userId } = req.params;
    const results = await Appointment.findAll({ where: { userId } });
    if (!results) return res.status(404).json({ message: 'Not Found appointments', user: userId });
    return res.json({ results });
  } catch (error) {
    next(error);
  }
});

const deleteById = catchError(async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Appointment.destroy({ where: { id } });

    if (result === 0) return res.status(404).json({ message: 'Not Found Date', id });
    res.status(200).json({ message: 'se elemino con exito' });
  } catch (error) {
    next(error);
  }
});

module.exports = {
  getAll,
  create,
  getById,
  getAppointments,
  deleteById,
};
