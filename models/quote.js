const { Model, DataTypes } = require('sequelize');

class Quote extends Model {
    static init(sequelize) {
        return super.init({
            quo_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            quo_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            quo_desc: {
                type: DataTypes.STRING,
                allowNull: false
            },
            quo_date: {
                type: DataTypes.DATE,
                allowNull: false
            },
            quo_payment_method: {
                type: DataTypes.STRING,
                allowNull: false
            },
            quo_company: {
                type: DataTypes.STRING,
                allowNull: false
            },
            quo_shipping_address: {
                type: DataTypes.STRING,
                allowNull: false
            },
            quo_email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            quo_phone: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            quo_comments: {
                type: DataTypes.STRING,
                allowNull: true
            },
            quo_cedula_nit: {
                type: DataTypes.STRING,
                allowNull: true
            },
            quo_subtotal: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false
            },
            quo_iva: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false
            },
            quo_total: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false
            },
            quo_discount_total: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false
            },
            quo_addition_cost: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false
            },
            quo_url_document: {
                type: DataTypes.STRING,
                allowNull: true
            },
            u_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            quote_state_id: {
                type: DataTypes.INTEGER,
                allowNull: true
            }
        }, {
            sequelize,
            modelName: 'quote',
            tableName: 'quotes',
            timestamps: false
        });
    }
}

module.exports = Quote;