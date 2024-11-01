const articleModel = require('./../models/article');
const priceModel = require('./../models/price');

const handleRequestError = require('./../utils/handleRequestError');
const { articleMessages, priceMessages } = require('./../utils/handleMessages');

const getArticles = async (req, res) => {
    try {
        const articles = await articleModel.findAll();
        res.send({ articles });

    } catch (error) {
        handleRequestError(res, 500, articleMessages.handleError.getArticles, error);
    }
};

const getArticle = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, articleMessages.notParameters);
        }

        const article = await articleModel.findByPk(id);

        if (article) {
            res.send({ article });

        } else {
            handleRequestError(res, 404, articleMessages.notFound);
        }

    } catch (error) {
        handleRequestError(res, 500, articleMessages.handleError.getArticle, error);
    }
};

const createArticle = async (req, res) => {
    try {
        const body = req.body;
        
        if (!body) {
            return handleRequestError(res, 400, articleMessages.notParameters);
        }

        const article = await articleModel.create(body);

        if (article) {
            try {
                const bodyPrice = {
                    "ar_id":    article.ar_id,
                    "wh_id":    1,
                    "p_value":  1,
                    "id_sap":   body.ar_code
                };
    
                const price = await priceModel.create(bodyPrice);
    
                if (price) {
                    res.status(201).send({ article });
    
                } else {
                    await articleModel.destroy({ where: { 'ar_id': article.ar_id } });
                    handleRequestError(res, 404, priceMessages.notCreated);
                }
                
            } catch (error) {
                await articleModel.destroy({ where: { 'ar_id': article.ar_id } });

                handleRequestError(res, 500, articleMessages.handleError.createArticle, error);
            }
            
        } else {
            handleRequestError(res, 404, articleMessages.notCreated);
        }

    } catch (error) {
        handleRequestError(res, 500, articleMessages.handleError.createArticle, error);
    }
};

const updateArticle = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        if (!id || !body) {
            return handleRequestError(res, 400, articleMessages.notParameters);
        }

        const [updatedRows] = await articleModel.update(body, {
            where: { 'ar_id': id }
        });

        if (updatedRows > 0) {
            const updatedArticle = await articleModel.findByPk(id);
            res.status(200).send({ article: updatedArticle });

        } else {
            handleRequestError(res, 404, articleMessages.notUpdated);
        }
        
    } catch (error) {
        handleRequestError(res, 500, articleMessages.handleError.updateArticle, error);
    }
};

const deleteArticle = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, articleMessages.notParameters);
        }

        const deletedRows = await articleModel.destroy({ where: { 'ar_id': id } });

        if (deletedRows > 0) {
            res.status(200).send({ message: articleMessages.deleted });

        } else {
            handleRequestError(res, 404, articleMessages.notDeleted);

        }
        
    } catch (error) {
        handleRequestError(res, 500,articleMessages.handleError.deleteArticle, error);
    }
};

module.exports = { createArticle, updateArticle }