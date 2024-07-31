const orderModel = require('./../models/orders');
const handleRequestError = require('./../utils/handleRequestError');

const { orderMessages } = require('./../utils/handleMessages');

const getOrders = async (req, res) => {
    try {
        const orders = await orderModel.findAll();
        res.send({ orders });

    } catch (error) {
        handleRequestError(res, 500, orderMessages.handleError.getOrders, error);
    }
};

const getOrder = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, orderMessages.notParameters);
        }

        const order = await orderModel.findByPk(id);

        if (order) {
            res.send({ order });

        } else {
            handleRequestError(res, 404, orderMessages.notFound);
        }

    } catch (error) {
        handleRequestError(res, 500, orderMessages.handleError.getOrder, error);
    }
};

const createOrder = async (req, res) => {
    try {
        const body = req.body;

        if (!body) {
            return handleRequestError(res, 400, orderMessages.notParameters);
        }

        const order = await orderModel.create(body);

        if (order) {
            res.status(201).send({ order });

        } else {
            handleRequestError(res, 404, orderMessages.notCreated);
        }
 
    } catch (error) {
        handleRequestError(res, 500, orderMessages.handleError.createOrder, error);
    }
};

const updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        if (!id || !body) {
            return handleRequestError(res, 400, orderMessages.notParameters);
        }

        const [updatedRows] = await orderModel.update(body, {
            where: { 'order_id': id }
        });

        if (updatedRows > 0) {
            const updatedOrder = await orderModel.findByPk(id);
            res.status(200).send({ order: updatedOrder });

        } else {
            handleRequestError(res, 404, orderMessages.notUpdated);
        }
        
    } catch (error) {
        handleRequestError(res, 500, orderMessages.handleError.updateOrder, error);
    }
};

const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, orderMessages.notParameters);
        }

        const deletedRows = await orderModel.destroy({ where: { 'order_id': id } });

        if (deletedRows > 0) {
            res.status(200).send({ message: orderMessages.deleted });

        } else {
            handleRequestError(res, 404, orderMessages.notDeleted);

        }
        
    } catch (error) {
        handleRequestError(res, 500, orderMessages.handleError.deleteOrder, error);
    }
};

module.exports = { getOrders, getOrder, createOrder, updateOrder }