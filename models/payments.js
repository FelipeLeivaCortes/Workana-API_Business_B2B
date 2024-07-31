const { sequelize } = require('./../config/mysql');
const { DataTypes } = require('sequelize');

const tableName = 'payment_methods';

const Payment = sequelize.define(
    tableName, {
        payment_method_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName,
    }
);

module.exports = Payment;