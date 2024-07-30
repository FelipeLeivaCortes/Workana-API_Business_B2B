const warehouseModel = require('./../models/warehouses');
const handleRequestError = require('./../utils/handleRequestError');

const { WarehouseMessages } = require('./../utils/handleMessages');

const getWarehouses = async (req, res) => {
    try {
        const Warehouses = await warehouseModel.findAll();
        res.send({Warehouses});

    } catch (error) {
        handleRequestError(res, 500, WarehouseMessages.getWarehouses.handleError, error);
    }
};

const getWarehouse = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, WarehouseMessages.getWarehouse.notParameters);
        }

        const Warehouse = await warehouseModel.findByPk(id);

        if (Warehouse) {
            res.send({Warehouse});

        } else {
            handleRequestError(res, 404, WarehouseMessages.getWarehouse.notFound);
        }

    } catch (error) {
        handleRequestError(res, 500, WarehouseMessages.getWarehouse.handleError, error);
    }
};

const createWarehouse = async (req, res) => {
    try {
        const body = req.body;

        if (!body) {
            return handleRequestError(res, 400, WarehouseMessages.createWarehouse.notParameters);
        }

        const Warehouse = await warehouseModel.create(body);

        if (Warehouse) {
            res.status(201).send({ Warehouse });

        } else {
            handleRequestError(res, 404, WarehouseMessages.createWarehouse.notRegistered);
        }

        
    } catch (error) {
        handleRequestError(res, 500, WarehouseMessages.createWarehouse.handleError, error);
    }
};

const updateWarehouse = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        if (!id || !body) {
            return handleRequestError(res, 400, WarehouseMessages.updateWarehouse.notParameters);
        }

        const [updatedRows] = await warehouseModel.update(body, {
            where: { 'wh_id': id }
        });

        if (updatedRows > 0) {
            const updatedWarehouse = await warehouseModel.findByPk(id);
            res.status(200).send({ Warehouse: updatedWarehouse });

        } else {
            handleRequestError(res, 404, WarehouseMessages.updateWarehouse.notUpdated);
        }
        
    } catch (error) {
        handleRequestError(res, 500, WarehouseMessages.updateWarehouse.handleError, error);
    }
};

const deleteWarehouse = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, WarehouseMessages.deleteWarehouse.notParameters);
        }

        const deletedRows = await warehouseModel.destroy({ where: { 'wh_id': id } });

        if (deletedRows > 0) {
            res.status(200).send({ message: WarehouseMessages.deleteWarehouse.deleted });

        } else {
            handleRequestError(res, 404, WarehouseMessages.deleteWarehouse.deleted);

        }
        
    } catch (error) {
        handleRequestError(res, 500, WarehouseMessages.deleteWarehouse.handleError, error);
    }

};

module.exports = { getWarehouses, getWarehouse, createWarehouse, updateWarehouse, deleteWarehouse }