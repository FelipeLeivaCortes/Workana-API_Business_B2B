const priceModel = require('./../models/prices');
const handleRequestError = require('./../utils/handleRequestError');

const { PriceMessages } = require('./../utils/handleMessages');

const getPrices = async (req, res) => {
    try {
        const Prices = await priceModel.findAll();
        res.send({Prices});

    } catch (error) {
        handleRequestError(res, 500, PriceMessages.getPrices.handleError, error);
    }
};

const getPrice = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, PriceMessages.getPrice.notParameters);
        }

        const Price = await priceModel.findByPk(id);

        if (Price) {
            res.send({Price});

        } else {
            handleRequestError(res, 404, PriceMessages.getPrice.notFound);
        }

    } catch (error) {
        handleRequestError(res, 500, PriceMessages.getPrice.handleError, error);
    }
};

const createPrice = async (req, res) => {
    try {
        const body = req.body;

        if (!body) {
            return handleRequestError(res, 400, PriceMessages.createPrice.notParameters);
        }

        const Price = await priceModel.create(body);

        if (Price) {
            res.status(201).send({ Price });

        } else {
            handleRequestError(res, 404, PriceMessages.createPrice.notFound);
        }

        
    } catch (error) {
        handleRequestError(res, 500, PriceMessages.createPrice.handleError, error);
    }
};

const updatePrice = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        if (!id || !body) {
            return handleRequestError(res, 400, PriceMessages.updatePrice.notParameters);
        }

        const [updatedRows] = await priceModel.update(body, {
            where: { 'p_id': id }
        });

        if (updatedRows > 0) {
            const updatedPrice = await priceModel.findByPk(id);
            res.status(200).send({ Price: updatedPrice });

        } else {
            handleRequestError(res, 404, PriceMessages.updatePrice.notUpdated);
        }
        
    } catch (error) {
        handleRequestError(res, 500, PriceMessages.updatePrice.handleError, error);
    }
};

const deletePrice = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, PriceMessages.deletePrice.notParameters);
        }

        const deletedRows = await priceModel.destroy({ where: { 'p_id': id } });

        if (deletedRows > 0) {
            res.status(200).send({ message: PriceMessages.deletePrice.deleted });

        } else {
            handleRequestError(res, 404, PriceMessages.deletePrice.notDeleted);

        }
        
    } catch (error) {
        handleRequestError(res, 500, PriceMessages.deletePrice.handleError, error);
    }
};

module.exports = { updatePrice }