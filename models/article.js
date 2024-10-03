const { Model, DataTypes } = require('sequelize');

class Article extends Model {
    static init(sequelize) {
        return super.init({
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
                allowNull: true
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
            sequelize,
            modelName: 'article',
            tableName: 'articles',
            timestamps: false
        });
    }
}

module.exports = Article;