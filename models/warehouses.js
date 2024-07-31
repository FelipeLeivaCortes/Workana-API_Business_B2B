const { sequelize } = require('./../config/mysql');
const { DataTypes } = require('sequelize');

const tableName = 'warehouse';

const Warehouse = sequelize.define(
    tableName, {
        wh_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        wh_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        wh_desc: {
            type: DataTypes.STRING,
            allowNull: true
        },
        wh_code: {
            type: DataTypes.STRING,
            allowNull: true
        },
        wh_address: {
            type: DataTypes.STRING,
            allowNull: true
        },
        wh_departament: {
            type: DataTypes.STRING,
            allowNull: true
        },
        wh_city: {
            type: DataTypes.STRING,
            allowNull: true
        },
        wh_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        wh_responsible: {
            type: DataTypes.STRING,
            allowNull: true
        },
        wh_phone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        c_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName,
    }
);

module.exports = Warehouse;