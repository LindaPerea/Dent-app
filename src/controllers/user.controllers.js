const catchError = require('../utils/catchError');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const getAll = catchError(async(req, res) => {
    const results = await User.findAll(); //aquí muestra todo
    // const results = await User.findAll( { attributes: [ "firstName, lastName"]}); aqui nos muestra solo nombre y apellido
    // const results = await User.findAll( { attributes: { exclude: ["password"]}); aqui muesta todo menos la contraseña
    // en caso desees que la contraseña no se muestre en ninguno de los endpoints se usa en el modelo ir....
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const encriptedPassword = await bcrypt.hash( password, 10);
    const result = await User.create( { firstName, lastName, email, password: encriptedPassword });
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await User.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await User.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email } = req.body;
    const result = await User.update(
        { firstName, lastName, email },
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

const login = catchError(async(req, res)=> {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email }});
    if( !user ) return res.status(401).json({ message: "Invalid Credentials"});
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid ) return res.status(401).json({ message: "Invalid Credentials"});
    const token = jwt.sign(
        { user },
        process.env.TOKEN_SECRET,
        { expiresIn: "1d"}
    )
    return res.json({ user, token });
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    login
}