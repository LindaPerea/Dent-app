const { getAll, create, getOne, remove, update, login } = require('../controllers/user.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');
const verifySchema = require('../schemas/joiSchema.checker');
const { loginSchema, signupSchema } = require('../schemas/auth.schemas');



const userRouter = express.Router();

userRouter.route('/')
    .get(verifyJWT, getAll)
    .post(verifySchema(signupSchema), create);

userRouter.route('/login')
    .post(verifySchema(loginSchema), login)

userRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);


module.exports = userRouter;