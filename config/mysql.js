require('dotenv').config();

const { Sequelize } = require('sequelize');

const database = process.env.DB_DATABASE;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;

const sequelize = new Sequelize(
    database, username, password, {
        host,
        port,
        dialect: "mysql"
    }
);

const dbConnect = async() => {
    try {
        await sequelize.authenticate();
        console.log('Conexión a My Sql Exitosa');

    } catch (error) {
        console.log("Error de conexión a MY SQL");
        console.log(error);
    }
};

module.exports = {sequelize, dbConnect};