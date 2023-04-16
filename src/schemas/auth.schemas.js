const Joi = require('joi')

const signupSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().required(),
  phoneNumber: Joi.string().required(),
  password: Joi.string().required(),
});

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
})

const forgetPasswordSchema = Joi.object({
  email: Joi.string().required(),
})

const restorePasswordSchema = Joi.object({
  password: Joi.string().required()
})


module.exports = {
  signupSchema,
  loginSchema,
  forgetPasswordSchema,
  restorePasswordSchema
}