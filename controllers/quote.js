const quoteModel = require('./../models/quotes');
const handleRequestError = require('./../utils/handleRequestError');

const { QuoteMessages } = require('./../utils/handleMessages');

const getQuotes = async (req, res) => {
    try {
        const Quotes = await quoteModel.findAll();
        res.send({Quotes});

    } catch (error) {
        handleRequestError(res, 500, QuoteMessages.getQuotes.handleError, error);
    }
};

const getQuote = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, QuoteMessages.getQuote.notParameters);
        }

        const Quote = await quoteModel.findByPk(id);

        if (Quote) {
            res.send({Quote});

        } else {
            handleRequestError(res, 404, QuoteMessages.getQuote.notFound);
        }

    } catch (error) {
        handleRequestError(res, 500, QuoteMessages.getQuote.handleError, error);
    }
};

const createQuote = async (req, res) => {
    try {
        const body = req.body;

        if (!body) {
            return handleRequestError(res, 400, QuoteMessages.createQuote.notParameters);
        }

        const Quote = await quoteModel.create(body);

        if (Quote) {
            res.status(201).send({ Quote });

        } else {
            handleRequestError(res, 404, QuoteMessages.createQuote.notRegistered);
        }

        
    } catch (error) {
        handleRequestError(res, 500, QuoteMessages.createQuote.handleError, error);
    }
};

const updateQuote = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        if (!id || !body) {
            return handleRequestError(res, 400, QuoteMessages.updateQuote.notParameters);
        }

        const [updatedRows] = await quoteModel.update(body, {
            where: { 'quo_id': id }
        });

        if (updatedRows > 0) {
            const updatedQuote = await quoteModel.findByPk(id);
            res.status(200).send({ Quote: updatedQuote });

        } else {
            handleRequestError(res, 404, QuoteMessages.updateQuote.notUpdated);
        }
        
    } catch (error) {
        handleRequestError(res, 500, QuoteMessages.updateQuote.handleError, error);
    }
};

const deleteQuote = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, QuoteMessages.deleteQuote.notParameters);
        }

        const deletedRows = await quoteModel.destroy({ where: { 'quo_id': id } });

        if (deletedRows > 0) {
            res.status(200).send({ message: QuoteMessages.deleteQuote.deleted });

        } else {
            handleRequestError(res, 404, QuoteMessages.deleteQuote.deleted);

        }
        
    } catch (error) {
        handleRequestError(res, 500, QuoteMessages.deleteQuote.handleError, error);
    }
};

module.exports = { getQuotes, getQuote, createQuote, updateQuote}