const Joi = require('joi')

const signupSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const loginSchema = Joi.object({
  email: Joi.string().require(),
  password: Joi.string().require(),
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