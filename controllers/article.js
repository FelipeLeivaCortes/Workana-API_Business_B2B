const articleModel = require('./../models/articles');
const handleRequestError = require('./../utils/handleRequestError');
const { ArticleMessages } = require('./../utils/handleMessages');


const getArticles = async (req, res) => {
    try {
        const Articles = await articleModel.findAll();
        res.send({Articles});

    } catch (error) {
        handleRequestError(res, 500, ArticleMessages.getArticles.handleError, error);
    }
};

const getArticle = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, ArticleMessages.getArticle.notParameters);
        }

        const Article = await articleModel.findByPk(id);

        if (Article) {
            res.send({Article});

        } else {
            handleRequestError(res, 404, ArticleMessages.getArticle.notParameters);
        }

    } catch (error) {
        handleRequestError(res, 500, ArticleMessages.getArticle.handleError, error);
    }
};

const createArticle = async (req, res) => {
    try {
        const body = req.body;
        
        if (!body) {
            return handleRequestError(res, 400, ArticleMessages.createArticle.notParameters);
        }

        const Article = await articleModel.create(body);

        if (Article) {
            res.status(201).send({ Article });

        } else {
            handleRequestError(res, 404, ArticleMessages.createArticle.notRegistered);
        }

        
    } catch (error) {
        handleRequestError(res, 500, ArticleMessages.createArticle.handleError, error);
    }
};

const updateArticle = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        if (!id || !body) {
            return handleRequestError(res, 400, ArticleMessages.updateArticle.notParameters);
        }

        const [updatedRows] = await articleModel.update(body, {
            where: { 'ar_id': id }
        });

        if (updatedRows > 0) {
            const updatedArticle = await articleModel.findByPk(id);
            res.status(200).send({ Article: updatedArticle });

        } else {
            handleRequestError(res, 404, ArticleMessages.updateArticle.notUpdated);
        }
        
    } catch (error) {
        handleRequestError(res, 500, ArticleMessages.updateArticle.handleError, error);
    }
};

const deleteArticle = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, ArticleMessages.deleteArticle.notParameters);
        }

        const deletedRows = await articleModel.destroy({ where: { 'ar_id': id } });

        if (deletedRows > 0) {
            res.status(200).send({ message: ArticleMessages.deleteArticle.deleted });

        } else {
            handleRequestError(res, 404, ArticleMessages.deleteArticle.notDeleted);

        }
        
    } catch (error) {
        handleRequestError(res, 500,ArticleMessages.deleteArticle.handleError, error);
    }
};

module.exports = { createArticle, updateArticle }