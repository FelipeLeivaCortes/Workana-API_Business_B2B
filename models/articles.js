const { sequelize } = require('./../config/mysql');
const { DataTypes } = require('sequelize');

const tableName = 'articles';

const Article = sequelize.define(
    tableName, {
        ar_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        ar_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ar_desc: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        ar_code: {
            type: DataTypes.STRING,
            allowNull: true
        },
        ar_characteristics: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        color_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        ar_measurement_value: {
            type: DataTypes.DOUBLE,
            allowNull: true
        },
        ar_img_url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ar_data_url: {
            type: DataTypes.STRING,
            allowNull: true
        },
        mt_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cat_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        sbcat_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        status_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName
    }
);

module.exports = Article;