const Joi = require('joi');

const createAppointmentSchema = Joi.object({
  day: Joi.string().required(),
  hour: Joi.string().required(),
});

module.exports = {
  createAppointmentSchema,
};
