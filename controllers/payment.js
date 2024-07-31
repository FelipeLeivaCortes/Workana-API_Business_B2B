const paymentModel = require('./../models/warehouses');
const handleRequestError = require('./../utils/handleRequestError');

const { paymentMessages } = require('./../utils/handleMessages');

const getPayments = async (req, res) => {
    try {
        const payments = await paymentModel.findAll();
        res.send({ payments });

    } catch (error) {
        handleRequestError(res, 500, paymentMessages.handleError.getPayments, error);
    }
};

const getPayment = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, paymentMessages.notParameters);
        }

        const payment = await paymentModel.findByPk(id);

        if (payment) {
            res.send({ payment });

        } else {
            handleRequestError(res, 404, paymentMessages.notFound);
        }

    } catch (error) {
        handleRequestError(res, 500, paymentMessages.handleError.getPayment, error);
    }
};

const createPayment = async (req, res) => {
    try {
        const body = req.body;

        if (!body) {
            return handleRequestError(res, 400, paymentMessages.notParameters);
        }

        const payment = await paymentModel.create(body);

        if (payment) {
            res.status(201).send({ payment });

        } else {
            handleRequestError(res, 404, paymentMessages.notCreated);
        }

        
    } catch (error) {
        handleRequestError(res, 500, paymentMessages.handleError.createPayment, error);
    }
};

const updatePayment = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        if (!id || !body) {
            return handleRequestError(res, 400, paymentMessages.notParameters);
        }

        const [updatedRows] = await paymentModel.update(body, {
            where: { 'payment_method_id': id }
        });

        if (updatedRows > 0) {
            const updatedPayment = await paymentModel.findByPk(id);
            res.status(200).send({ payment: updatedPayment });

        } else {
            handleRequestError(res, 404, paymentMessages.notUpdated);
        }
        
    } catch (error) {
        handleRequestError(res, 500, paymentMessages.handleError.updatePayment, error);
    }
};

const deletePayment = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, paymentMessages.notParameters);
        }

        const deletedRows = await paymentModel.destroy({ where: { 'payment_method_id': id } });

        if (deletedRows > 0) {
            res.status(200).send({ message: paymentMessages.deleted });

        } else {
            handleRequestError(res, 404, paymentMessages.notDeleted);

        }
        
    } catch (error) {
        handleRequestError(res, 500, paymentMessages.handleError.deletePayment, error);
    }

};

module.exports = { createPayment }