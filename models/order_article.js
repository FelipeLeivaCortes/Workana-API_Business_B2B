const { Model, DataTypes } = require('sequelize');

class OrderArticle extends Model {
    static init(sequelize) {
        return super.init({
            orderart_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            order_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            ar_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            orderart_quantity: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            orderart_pricenormal: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            orderart_discountPercentajeOrPrice: {
                type: DataTypes.STRING,
                allowNull: false
            },
            orderart_discountPrice: {
                type: DataTypes.FLOAT,
                allowNull: false
            }
        }, {
            sequelize,
            modelName: 'orderArticle',
            tableName: 'order_articles',
            timestamps: false
        });
    }
}

module.exports = OrderArticle;