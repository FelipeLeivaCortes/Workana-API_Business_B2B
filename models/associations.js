module.exports = (sequelize) => {
    const { order, article, orderArticle, quote, quoteArticle } = sequelize.models;

    // Asociaciones para order y article
    order.belongsToMany(article, { through: orderArticle, foreignKey: 'order_id' });
    article.belongsToMany(order, { through: orderArticle, foreignKey: 'ar_id' });

    orderArticle.belongsTo(order, { foreignKey: 'order_id' });
    orderArticle.belongsTo(article, { foreignKey: 'ar_id' });
    order.hasMany(orderArticle, { foreignKey: 'order_id' });
    article.hasMany(orderArticle, { foreignKey: 'ar_id' });

    // Asociaciones para quote y article
    quote.belongsToMany(article, { through: quoteArticle, foreignKey: 'quo_id' });
    article.belongsToMany(quote, { through: quoteArticle, foreignKey: 'ar_id' });

    quoteArticle.belongsTo(quote, { foreignKey: 'quo_id' });
    quoteArticle.belongsTo(article, { foreignKey: 'ar_id' });
    quote.hasMany(quoteArticle, { foreignKey: 'quo_id' });
    article.hasMany(quoteArticle, { foreignKey: 'ar_id' });
};