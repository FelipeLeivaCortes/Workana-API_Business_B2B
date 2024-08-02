const orderModel = require('./../models/order');
const articleModel = require('./../models/article');

const handleRequestError = require('./../utils/handleRequestError');
const isValidDate = require('./../utils/handleDates');
const { parseISO, formatISO } = require('date-fns');

const { Op } = require('sequelize');
const { orderMessages } = require('./../utils/handleMessages');

const getOrders = async (req, res) => {
    try {
        let { from, to } = req.query;
    
        if (!isValidDate(from)) {
            return handleRequestError(res, 400, 'ERROR FROM DATE');
        }

        from = formatISO(parseISO(`${from}T00:00:00Z`));
        
        if (!isValidDate(to)) {
            const endOfDay = new Date();
            endOfDay.setUTCHours(23, 59, 59, 999);

            to = endOfDay.toISOString();
            
        } else {
            to = formatISO(parseISO(`${to}T23:59:59Z`));
        }

        const orders = await orderModel.findAll({
            where: {
                order_date: {
                    [Op.gte]: from,
                    [Op.lte]: to,
                }
            }
        });

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

        const order = await orderModel.findByPk(id, {
            include: [{
                model: articleModel,
                through: { attributes: [] } // Esto excluye los datos de la tabla intermedia
            }]
        });


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