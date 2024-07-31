const priceModel = require('./../models/prices');
const handleRequestError = require('./../utils/handleRequestError');

const { priceMessages } = require('./../utils/handleMessages');

const getPrices = async (req, res) => {
    try {
        const prices = await priceModel.findAll();
        res.send({ prices });

    } catch (error) {
        handleRequestError(res, 500, priceMessages.handleError.getPrices, error);
    }
};

const getPrice = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, priceMessages.notParameters);
        }

        const price = await priceModel.findByPk(id);

        if (price) {
            res.send({ price });

        } else {
            handleRequestError(res, 404, priceMessages.notFound);
        }

    } catch (error) {
        handleRequestError(res, 500, priceMessages.handleError.getPrice, error);
    }
};

const createPrice = async (req, res) => {
    try {
        const body = req.body;

        if (!body) {
            return handleRequestError(res, 400, priceMessages.notParameters);
        }

        const price = await priceModel.create(body);

        if (price) {
            res.status(201).send({ price });

        } else {
            handleRequestError(res, 404, priceMessages.notCreated);
        }

    } catch (error) {
        handleRequestError(res, 500, priceMessages.handleError.createPrice, error);
    }
};

const updatePrice = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        if (!id || !body) {
            return handleRequestError(res, 400, priceMessages.notParameters);
        }

        const [updatedRows] = await priceModel.update(body, {
            where: { 'p_id': id }
        });

        if (updatedRows > 0) {
            const updatedPrice = await priceModel.findByPk(id);
            res.status(200).send({ price: updatedPrice });

        } else {
            handleRequestError(res, 404, priceMessages.notUpdated);
        }
        
    } catch (error) {
        handleRequestError(res, 500, priceMessages.handleError.updatePrice, error);
    }
};

const deletePrice = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, priceMessages.notParameters);
        }

        const deletedRows = await priceModel.destroy({ where: { 'p_id': id } });

        if (deletedRows > 0) {
            res.status(200).send({ message: priceMessages.deleted });

        } else {
            handleRequestError(res, 404, priceMessages.notDeleted);

        }
        
    } catch (error) {
        handleRequestError(res, 500, priceMessages.handleError.deletePrice, error);
    }
};

module.exports = { updatePrice }