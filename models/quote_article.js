const { Model, DataTypes } = require('sequelize');

class QuoteArticle extends Model {
    static init(sequelize) {
        return super.init({
            quoart_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            quo_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            ar_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            quoart_quantity: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            quoart_pricenormal: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            quoart_discountPercentajeOrPrice: {
                type: DataTypes.STRING,
                allowNull: false
            },
            quoart_discountPrice: {
                type: DataTypes.FLOAT,
                allowNull: false
            }
        }, {
            sequelize,
            modelName: 'quoteArticle',
            tableName: 'quote_articles',
            timestamps: false
        });
    }
}

module.exports = QuoteArticle;