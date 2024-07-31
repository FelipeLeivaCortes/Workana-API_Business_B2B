const orderModel = require('./../models/orders');
const handleRequestError = require('./../utils/handleRequestError');

const { OrderMessages } = require('./../utils/handleMessages');

const getOrders = async (req, res) => {
    try {
        const Orders = await orderModel.findAll();
        res.send({Orders});

    } catch (error) {
        handleRequestError(res, 500, OrderMessages.getOrders.handleError, error);
    }
};

const getOrder = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, OrderMessages.getOrder.notParameters);
        }

        const Order = await orderModel.findByPk(id);

        if (Order) {
            res.send({Order});

        } else {
            handleRequestError(res, 404, OrderMessages.getOrder.notFound);
        }

    } catch (error) {
        handleRequestError(res, 500, OrderMessages.getOrder.handleError, error);
    }
};

const createOrder = async (req, res) => {
    try {
        const body = req.body;

        if (!body) {
            return handleRequestError(res, 400, OrderMessages.createOrder.notParameters);
        }

        const Order = await orderModel.create(body);

        if (Order) {
            res.status(201).send({ Order });

        } else {
            handleRequestError(res, 404, OrderMessages.createOrder.notRegistered);
        }

        
    } catch (error) {
        handleRequestError(res, 500, OrderMessages.createOrder.handleError, error);
    }
};

const updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        if (!id || !body) {
            return handleRequestError(res, 400, OrderMessages.updateOrder.notParameters);
        }

        const [updatedRows] = await orderModel.update(body, {
            where: { 'order_id': id }
        });

        if (updatedRows > 0) {
            const updatedOrder = await orderModel.findByPk(id);
            res.status(200).send({ Order: updatedOrder });

        } else {
            handleRequestError(res, 404, OrderMessages.updateOrder.notUpdated);
        }
        
    } catch (error) {
        handleRequestError(res, 500, OrderMessages.updateOrder.handleError, error);
    }
};

const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, OrderMessages.deleteOrder.notParameters);
        }

        const deletedRows = await orderModel.destroy({ where: { 'order_id': id } });

        if (deletedRows > 0) {
            res.status(200).send({ message: OrderMessages.deleteOrder.deleted });

        } else {
            handleRequestError(res, 404, OrderMessages.deleteOrder.notDeleted);

        }
        
    } catch (error) {
        handleRequestError(res, 500, OrderMessages.deleteOrder.handleError, error);
    }
};

module.exports = { getOrders, getOrder, createOrder, updateOrder }