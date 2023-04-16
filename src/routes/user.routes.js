const { getAll, create, getOne, remove, update, login } = require('../controllers/user.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');
const verifySchema = require('../schemas/joiSchema.checker');
const { loginSchema, signupSchema } = require('../schemas/auth.schemas');
const { verifyAdministrator } = require('../middlewares/VerifyAdministrator');
const { verifyIsTheSameUser } = require('../middlewares/verifyIsTheSameUser');



const userRouter = express.Router();

userRouter.route('/')
    .get(verifyJWT, verifyAdministrator, getAll)
    .post(verifySchema(signupSchema), create);

userRouter.route('/login')
    .post(verifySchema(loginSchema), login)

userRouter.route('/:id')
    .get(verifyJWT, verifyIsTheSameUser, verifyAdministrator, getOne)
    .delete(verifyJWT, verifyIsTheSameUser, verifyAdministrator, remove)
    .put(verifyJWT, verifyIsTheSameUser, verifyAdministrator, update);
    

module.exports = userRouter;