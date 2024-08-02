const { sequelize } = require('./../config/mysql');
const order = require('./order');
const article = require('./article');
const orderArticle = require('./order_article');
const quote = require('./quote');
const quoteArticle = require('./quote_article');

const initializeModels = () => {
    order.init(sequelize);
    article.init(sequelize);
    orderArticle.init(sequelize);
    quote.init(sequelize);
    quoteArticle.init(sequelize);

    require('./associations')(sequelize);
};

initializeModels();

module.exports = {
    sequelize,
    order,
    article,
    orderArticle,
    quote,
    quoteArticle,
    initializeModels
};