const Joi = require('joi');

const createAppointmentSchema = Joi.object({
  dar: Joi.string().required(),
  hour: Joi.string().required(),
});

module.exports = {
  createAppointmentSchema,
}