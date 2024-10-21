require('dotenv').config();

const { Sequelize } = require('sequelize');

const database = process.env.NODE_ENV == 'test' ? process.env.DB_DATABASE_TEST : process.env.DB_DATABASE_DEV;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;

if (!username || !password || !host || !port || !database) {
    throw new Error('Missing required environment variables');
}

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
        console.error('Error de conexión a MySQL:', error.message);
    }
};

module.exports = {sequelize, dbConnect};