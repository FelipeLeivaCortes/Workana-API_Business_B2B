const warehouseModel = require('./../models/warehouse');
const handleRequestError = require('./../utils/handleRequestError');

const { warehouseMessages } = require('./../utils/handleMessages');

const getWarehouses = async (req, res) => {
    try {
        const warehouses = await warehouseModel.findAll();
        res.send({ warehouses });

    } catch (error) {
        handleRequestError(res, 500, warehouseMessages.handleError.getWarehouses, error);
    }
};

const getWarehouse = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, warehouseMessages.notParameters);
        }

        const warehouse = await warehouseModel.findByPk(id);

        if (warehouse) {
            res.send({ warehouse });

        } else {
            handleRequestError(res, 404, warehouseMessages.notFound);
        }

    } catch (error) {
        handleRequestError(res, 500, warehouseMessages.handleError.getWarehouse, error);
    }
};

const createWarehouse = async (req, res) => {
    try {
        const body = req.body;

        if (!body) {
            return handleRequestError(res, 400, warehouseMessages.notParameters);
        }

        const warehouse = await warehouseModel.create(body);

        if (warehouse) {
            res.status(201).send({ warehouse });

        } else {
            handleRequestError(res, 404, warehouseMessages.notCreated);
        }
        
    } catch (error) {
        handleRequestError(res, 500, warehouseMessages.handleError.createWarehouse, error);
    }
};

const updateWarehouse = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        if (!id || !body) {
            return handleRequestError(res, 400, warehouseMessages.notParameters);
        }

        const [updatedRows] = await warehouseModel.update(body, {
            where: { 'wh_id': id }
        });

        if (updatedRows > 0) {
            const updatedWarehouse = await warehouseModel.findByPk(id);
            res.status(200).send({ warehouse: updatedWarehouse });

        } else {
            handleRequestError(res, 404, warehouseMessages.notUpdated);
        }
        
    } catch (error) {
        handleRequestError(res, 500, warehouseMessages.handleError.updateWarehouse, error);
    }
};

const deleteWarehouse = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, warehouseMessages.notParameters);
        }

        const deletedRows = await warehouseModel.destroy({ where: { 'wh_id': id } });

        if (deletedRows > 0) {
            res.status(200).send({ message: warehouseMessages.deleted });

        } else {
            handleRequestError(res, 404, warehouseMessages.notDeleted);

        }
        
    } catch (error) {
        handleRequestError(res, 500, warehouseMessages.handleError.deleteWarehouse, error);
    }

};

module.exports = { createWarehouse, updateWarehouse }