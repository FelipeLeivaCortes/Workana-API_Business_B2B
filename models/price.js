const { sequelize } = require('./../config/mysql');
const { DataTypes } = require('sequelize');

const tableName = 'prices';

const Price = sequelize.define(
    tableName, {
        p_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        ar_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        wh_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        p_value: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        id_sap: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName
    }
);

module.exports = Price;