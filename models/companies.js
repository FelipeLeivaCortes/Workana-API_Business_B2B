const { sequelize } = require('./../config/mysql');
const { DataTypes } = require('sequelize');

const tableName = 'company';

const Company = sequelize.define(
    tableName, {
        c_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        c_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        c_desc: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        c_num_nit: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        c_num_ver_nit: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        c_route_rut: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        c_route_cc_representant: {
            type: DataTypes.STRING,
            allowNull: true, 
        },
        c_chamber_commerce: {
            type: DataTypes.STRING,
            allowNull: true, 
        },
        c_form_inscription: {
            type: DataTypes.STRING,
            allowNull: true, 
        },
        c_certificate_bank: {
            type: DataTypes.STRING,
            allowNull: true, 
        },
        c_street: {
            type: DataTypes.STRING,
            allowNull: true, 
        },
        c_apartament: {
            type: DataTypes.STRING,
            allowNull: true, 
        },
        c_country: {
            type: DataTypes.STRING,
            allowNull: true, 
        },
        c_city: {
            type: DataTypes.STRING,
            allowNull: true, 
        },
        c_state: {
            type: DataTypes.STRING,
            allowNull: true, 
        },
        c_postal_code: {
            type: DataTypes.INTEGER,
            allowNull: true, 
        },
        c_shippingStreet: {
            type: DataTypes.STRING,
            allowNull: true, 
        },
        c_shippingApartament: {
            type: DataTypes.STRING,
            allowNull: true, 
        },
        c_shippingCountry: {
            type: DataTypes.STRING,
            allowNull: true, 
        },
        c_shippingCity: {
            type: DataTypes.STRING,
            allowNull: true, 
        },
        c_shippingState: {
            type: DataTypes.STRING,
            allowNull: true, 
        },
        c_shippingPostalcode: {
            type: DataTypes.INTEGER,
            allowNull: true, 
        },
        c_dateQuoteValidity: {
            type: DataTypes.DATE,
            allowNull: true, 
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        id_subs: {
            type: DataTypes.INTEGER,
            allowNull: true, 
        },
        tpi_id: {
            type: DataTypes.INTEGER,
            allowNull: true, 
        },
        status_id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
        },
        s_id: {
            type: DataTypes.INTEGER,
            allowNull: true, 
        }
    }, {
        timestamps: false,
        tableName
    }
);

module.exports = Company;