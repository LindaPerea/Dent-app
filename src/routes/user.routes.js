const {
  getAll,
  create,
  getOne,
  remove,
  update,
  getAppointments,
  login,
} = require('../controllers/user.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');
const verifySchema = require('../schemas/joiSchema.checker');
const { loginSchema, signupSchema } = require('../schemas/auth.schemas');
const { verifyAdministrator } = require('../middlewares/verifyAdministrator');
const { verifyIsTheSameUser } = require('../middlewares/verifyIsTheSameUser');

const userRouter = express.Router();
// For new routes you must place the user id in params as userId, but if you are in the users path you should not follow this rule

userRouter
  .route('/')
  .get(verifyJWT, verifyAdministrator, getAll)
  .post(verifySchema(signupSchema, 'body'), create);

userRouter.route('/login').post(verifySchema(loginSchema, 'body'), login);

userRouter.route('/appointments')
  .get(verifyJWT, verifyIsTheSameUser,verifyAdministrator, getAppointments)

userRouter
  .route('/:id')
  .get(verifyJWT, verifyIsTheSameUser, verifyAdministrator, getOne)
  .delete(verifyJWT, verifyIsTheSameUser, verifyAdministrator, remove)
  .put(verifyJWT, verifyIsTheSameUser, verifyAdministrator, update);

module.exports = userRouter;
