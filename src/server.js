const app = require('./app');
const sequelize = require('./utils/connection');

const PORT = process.env.PORT || 8000;

const main = async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log("DB conectado");
        app.listen(PORT);
        console.log(`Servidor que se ejecuta en el puerto ${PORT}`);
    } catch (error) {
        console.log(error)
    }
}

main();