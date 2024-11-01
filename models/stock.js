const { sequelize } = require('./../config/mysql');
const { DataTypes } = require('sequelize');

const tableName = 'stock';

const Stock = sequelize.define(
    tableName, {
        stock_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        stock_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        stock_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        stock_Quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        stock_lote: {
            type: DataTypes.STRING,
            allowNull: true
        },
        stock_date_entry: {
            type: DataTypes.DATE,
            allowNull: true
        },
        stock_expiration_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        ar_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ar_code: {
            type: DataTypes.STRING,
            allowNull: false
        },
        wh_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName,
    }
);

module.exports = Stock;