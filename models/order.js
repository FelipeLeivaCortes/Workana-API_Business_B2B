const { Model, DataTypes } = require('sequelize');

class Order extends Model {
    static init(sequelize) {
        return super.init({
            order_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            order_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            order_desc: {
                type: DataTypes.STRING,
                allowNull: false
            },
            order_date: {
                type: DataTypes.DATE,
                allowNull: false
            },
            order_payment_method: {
                type: DataTypes.STRING,
                allowNull: false
            },
            order_company: {
                type: DataTypes.STRING,
                allowNull: false
            },
            order_shipping_address: {
                type: DataTypes.STRING,
                allowNull: false
            },
            order_email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            order_phone: {
                type: DataTypes.STRING,
                allowNull: false
            },
            order_comments: {
                type: DataTypes.STRING,
                allowNull: false
            },
            order_cedula_nit: {
                type: DataTypes.STRING,
                allowNull: true
            },
            order_subtotal: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false
            },
            order_iva: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false
            },
            order_total: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false
            },
            order_discount_total: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false
            },
            order_addition_cost: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false
            },
            order_url_document: {
                type: DataTypes.STRING,
                allowNull: true
            },
            u_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            order_state_id: {
                type: DataTypes.INTEGER,
                allowNull: true
            }
        }, {
            sequelize,
            modelName: 'order',
            tableName: 'orders',
            timestamps: false
        });
    }
}

module.exports = Order;