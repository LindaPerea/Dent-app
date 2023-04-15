const Joi = require("joi");

const createDateSchema = Joi.object({
  date: Joi.string().required(),
});

module.exports = {
  createDateSchema
}