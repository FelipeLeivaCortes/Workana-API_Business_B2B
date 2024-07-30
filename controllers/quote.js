const quoteModel = require('./../models/quotes');
const handleRequestError = require('./../utils/handleRequestError');

const entity = "Ofertas de Ventas";

const getQuotes = async (req, res) => {
    try {
        const Quotes = await quoteModel.findAll();
        res.send({Quotes});

    } catch (error) {
        handleRequestError(res, 500, `Error al buscar ${entity}s`, error);
    }
};

const getQuote = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, `Faltan parámetros para buscar ${entity}`);
        }

        const Quote = await quoteModel.findByPk(id);

        if (Quote) {
            res.send({Quote});

        } else {
            handleRequestError(res, 404, `${entity} no encontrada`);
        }

    } catch (error) {
        handleRequestError(res, 500, `Error al buscar ${entity}`, error);
    }
};

const createQuote = async (req, res) => {
    try {
        const body = req.body;

        if (!body) {
            return handleRequestError(res, 400, `Faltan parámetros para registrar ${entity}`);
        }

        const Quote = await quoteModel.create(body);

        if (Quote) {
            res.status(201).send({ Quote });

        } else {
            handleRequestError(res, 404, `${entity} no registrada`);
        }

        
    } catch (error) {
        handleRequestError(res, 500, `Error al registrar ${entity}`, error);
    }
};

const updateQuote = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        if (!id || !body) {
            return handleRequestError(res, 400, `Faltan parámetros para actualizar ${entity}`);
        }

        const [updatedRows] = await quoteModel.update(body, {
            where: { 'quo_id': id }
        });

        if (updatedRows > 0) {
            const updatedQuote = await quoteModel.findByPk(id);
            res.status(200).send({ Quote: updatedQuote });

        } else {
            handleRequestError(res, 404, `${entity} no actualizada`);
        }
        
    } catch (error) {
        handleRequestError(res, 500, `Error al actualizar ${entity}`, error);
    }
};

const deleteQuote = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, `Faltan parámetros para eliminar ${entity}`);
        }

        const deletedRows = await quoteModel.destroy({ where: { 'quo_id': id } });

        if (deletedRows > 0) {
            res.status(200).send({ message: `${entity} eliminada con éxito` });

        } else {
            handleRequestError(res, 404, `${entity} no encontrada`);

        }
        
    } catch (error) {
        handleRequestError(res, 500, `Error al eliminar ${entity}`, error);
    }

};

module.exports = { getQuotes, getQuote, createQuote, updateQuote, deleteQuote }