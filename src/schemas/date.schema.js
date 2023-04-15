const Joi = require('joi');

const createDateSchema = Joi.object({
  appointmentDate: Joi.string().required(),
});

module.exports = {
  createDateSchema
}