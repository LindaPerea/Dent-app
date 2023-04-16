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
    const { isTheSameUser, isAdministrator } = req.user;

    if (isTheSameUser || isAdministrator) {
      const result = await Date.findOne({ where: { id } });
      if (!result) return res.status(404).json({ message: 'Not Found Date', id });
      return res.json({ result });
    };
    res.json({ message: 'Unauthorized', details: "You can't see this section" });
  } catch (error) {
    throw error;
  }
});

const getAppointments = catchError(async (req, res) => {
  try {
    const { isTheSameUser, isAdministrator } = req.user;
    const { id } = req.body;
    if (isTheSameUser || isAdministrator) {
      const results = await Date.findAll({ where: { userId: id } });
      if (!results) return res.status(404).json({ message: 'Not Found appointments', user: userId });
      return res.json({ results });
    }
    res.json({ message: 'Unauthorized', details: "You can't see this section" });
  } catch (error) {
    throw error
  }
});

const deleteById = catchError(async (req, res) => {
  try {
    const { id } = req.params
    const result = await Date.destroy({ where: { id } });

    if (result === 0) return res.status(404).json({ message: 'Not Found Date', id });
    res.status(200).json({ message: 'se elemino con exito' })
  } catch (error) {

  }
});

module.exports = {
  getAll,
  create,
  getById,
  getAppointments,
  deleteById
}