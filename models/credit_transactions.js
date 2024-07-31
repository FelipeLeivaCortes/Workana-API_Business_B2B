const { sequelize } = require('./../config/mysql');
const { DataTypes } = require('sequelize');

const tableName = 'credittransactions';

const CreditTransactions = sequelize.define(
    tableName, {
        transaction_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        c_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        transaction_date: {
            type: DataTypes.DATEONLY,
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName
    }
);

module.exports = CreditTransactions;