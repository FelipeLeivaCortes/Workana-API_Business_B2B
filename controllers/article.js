const articleModel = require('./../models/articles');
const handleRequestError = require('./../utils/handleRequestError');

const entity = "Artículo";

const getArticles = async (req, res) => {
    try {
        const Articles = await articleModel.findAll();
        res.send({Articles});

    } catch (error) {
        handleRequestError(res, 500, `Error al buscar ${entity}s`, error);
    }
};

const getArticle = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, `Faltan parámetros para buscar ${entity}`);
        }

        const Article = await articleModel.findByPk(id);

        if (Article) {
            res.send({Article});

        } else {
            handleRequestError(res, 404, `${entity} no encontrado`);
        }

    } catch (error) {
        handleRequestError(res, 500, `Error al buscar ${entity}`, error);
    }
};

const createArticle = async (req, res) => {
    try {
        const body = req.body;

        if (!body) {
            return handleRequestError(res, 400, `Faltan parámetros para registrar ${entity}`);
        }

        const Article = await articleModel.create(body);

        if (Article) {
            res.status(201).send({ Article });

        } else {
            handleRequestError(res, 404, `${entity} no registrado`);
        }

        
    } catch (error) {
        handleRequestError(res, 500, `Error al registrar ${entity}`, error);
    }
};

const updateArticle = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        if (!id || !body) {
            return handleRequestError(res, 400, `Faltan parámetros para actualizar ${entity}`);
        }

        const [updatedRows] = await articleModel.update(body, {
            where: { 'ar_id': id }
        });

        if (updatedRows > 0) {
            const updatedArticle = await articleModel.findByPk(id);
            res.status(200).send({ Article: updatedArticle });

        } else {
            handleRequestError(res, 404, `${entity} no actualizado`);
        }
        
    } catch (error) {
        handleRequestError(res, 500, `Error al actualizar ${entity}`, error);
    }
};

const deleteArticle = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, `Faltan parámetros para eliminar ${entity}`);
        }

        const deletedRows = await articleModel.destroy({ where: { 'ar_id': id } });

        if (deletedRows > 0) {
            res.status(200).send({ message: `${entity} eliminado con éxito` });

        } else {
            handleRequestError(res, 404, `${entity} no encontrado`);

        }
        
    } catch (error) {
        handleRequestError(res, 500, `Error al eliminar ${entity}`, error);
    }

};

module.exports = { getArticles, getArticle, createArticle, updateArticle, deleteArticle }