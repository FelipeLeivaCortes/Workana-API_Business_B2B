const quoteModel = require('./../models/quotes');
const handleRequestError = require('./../utils/handleRequestError');

const { quoteMessages } = require('./../utils/handleMessages');

const getQuotes = async (req, res) => {
    try {
        const quotes = await quoteModel.findAll();
        res.send({ quotes });

    } catch (error) {
        handleRequestError(res, 500, quoteMessages.handleError.getQuotes, error);
    }
};

const getQuote = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, quoteMessages.notParameters);
        }

        const quote = await quoteModel.findByPk(id);

        if (quote) {
            res.send({ quote });

        } else {
            handleRequestError(res, 404, quoteMessages.notFound);
        }

    } catch (error) {
        handleRequestError(res, 500, quoteMessages.handleError.getQuote, error);
    }
};

const createQuote = async (req, res) => {
    try {
        const body = req.body;

        if (!body) {
            return handleRequestError(res, 400, quoteMessages.notParameters);
        }

        const quote = await quoteModel.create(body);

        if (quote) {
            res.status(201).send({ quote });

        } else {
            handleRequestError(res, 404, quoteMessages.notCreated);
        }

    } catch (error) {
        handleRequestError(res, 500, quoteMessages.handleError.createQuote, error);
    }
};

const updateQuote = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        if (!id || !body) {
            return handleRequestError(res, 400, quoteMessages.notParameters);
        }

        const [updatedRows] = await quoteModel.update(body, {
            where: { 'quo_id': id }
        });

        if (updatedRows > 0) {
            const updatedQuote = await quoteModel.findByPk(id);
            res.status(200).send({ quote: updatedQuote });

        } else {
            handleRequestError(res, 404, quoteMessages.notUpdated);
        }
        
    } catch (error) {
        handleRequestError(res, 500, quoteMessages.handleError.createQuote, error);
    }
};

const deleteQuote = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, quoteMessages.notParameters);
        }

        const deletedRows = await quoteModel.destroy({ where: { 'quo_id': id } });

        if (deletedRows > 0) {
            res.status(200).send({ message: quoteMessages.deleted });

        } else {
            handleRequestError(res, 404, quoteMessages.notDeleted);

        }
        
    } catch (error) {
        handleRequestError(res, 500, quoteMessages.handleError.deleteQuote, error);
    }
};

module.exports = { getQuotes, getQuote, createQuote, updateQuote}