const orderModel = require('./../models/orders');
const handleRequestError = require('./../utils/handleRequestError');

const entity = "Orden de Venta";

const getOrders = async (req, res) => {
    try {
        const Orders = await orderModel.findAll();
        res.send({Orders});

    } catch (error) {
        handleRequestError(res, 500, `Error al buscar ${entity}s`, error);
    }
};

const getOrder = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, `Faltan parámetros para buscar ${entity}`);
        }

        const Order = await orderModel.findByPk(id);

        if (Order) {
            res.send({Order});

        } else {
            handleRequestError(res, 404, `${entity} no encontrada`);
        }

    } catch (error) {
        handleRequestError(res, 500, `Error al buscar ${entity}`, error);
    }
};

const createOrder = async (req, res) => {
    try {
        const body = req.body;

        if (!body) {
            return handleRequestError(res, 400, `Faltan parámetros para registrar ${entity}`);
        }

        const Order = await orderModel.create(body);

        if (Order) {
            res.status(201).send({ Order });

        } else {
            handleRequestError(res, 404, `${entity} no registrada`);
        }

        
    } catch (error) {
        handleRequestError(res, 500, `Error al registrar ${entity}`, error);
    }
};

const updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        if (!id || !body) {
            return handleRequestError(res, 400, `Faltan parámetros para actualizar ${entity}`);
        }

        const [updatedRows] = await orderModel.update(body, {
            where: { 'order_id': id }
        });

        if (updatedRows > 0) {
            const updatedOrder = await orderModel.findByPk(id);
            res.status(200).send({ Order: updatedOrder });

        } else {
            handleRequestError(res, 404, `${entity} no actualizada`);
        }
        
    } catch (error) {
        handleRequestError(res, 500, `Error al actualizar ${entity}`, error);
    }
};

const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, `Faltan parámetros para eliminar ${entity}`);
        }

        const deletedRows = await orderModel.destroy({ where: { 'order_id': id } });

        if (deletedRows > 0) {
            res.status(200).send({ message: `${entity} eliminada con éxito` });

        } else {
            handleRequestError(res, 404, `${entity} no encontrada`);

        }
        
    } catch (error) {
        handleRequestError(res, 500, `Error al eliminar ${entity}`, error);
    }

};

module.exports = { getOrders, getOrder, createOrder, updateOrder, deleteOrder }