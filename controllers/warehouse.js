const warehouseModel = require('./../models/warehouses');
const handleRequestError = require('./../utils/handleRequestError');

const entity = "Almacen";

const getWarehouses = async (req, res) => {
    try {
        const Warehouses = await warehouseModel.findAll();
        res.send({Warehouses});

    } catch (error) {
        handleRequestError(res, 500, `Error al buscar ${entity}es`, error);
    }
};

const getWarehouse = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, `Faltan parámetros para buscar ${entity}`);
        }

        const Warehouse = await warehouseModel.findByPk(id);

        if (Warehouse) {
            res.send({Warehouse});

        } else {
            handleRequestError(res, 404, `${entity} no encontrado`);
        }

    } catch (error) {
        handleRequestError(res, 500, `Error al buscar ${entity}`, error);
    }
};

const createWarehouse = async (req, res) => {
    try {
        const body = req.body;

        if (!body) {
            return handleRequestError(res, 400, `Faltan parámetros para registrar ${entity}`);
        }

        const Warehouse = await warehouseModel.create(body);

        if (Warehouse) {
            res.status(201).send({ Warehouse });

        } else {
            handleRequestError(res, 404, `${entity} no registrado`);
        }

        
    } catch (error) {
        handleRequestError(res, 500, `Error al registrar ${entity}`, error);
    }
};

const updateWarehouse = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        if (!id || !body) {
            return handleRequestError(res, 400, `Faltan parámetros para actualizar ${entity}`);
        }

        const [updatedRows] = await warehouseModel.update(body, {
            where: { 'wh_id': id }
        });

        if (updatedRows > 0) {
            const updatedWarehouse = await warehouseModel.findByPk(id);
            res.status(200).send({ Warehouse: updatedWarehouse });

        } else {
            handleRequestError(res, 404, `${entity} no actualizado`);
        }
        
    } catch (error) {
        handleRequestError(res, 500, `Error al actualizar ${entity}`, error);
    }
};

const deleteWarehouse = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, `Faltan parámetros para eliminar ${entity}`);
        }

        const deletedRows = await warehouseModel.destroy({ where: { 'wh_id': id } });

        if (deletedRows > 0) {
            res.status(200).send({ message: `${entity} eliminado con éxito` });

        } else {
            handleRequestError(res, 404, `${entity} no encontrado`);

        }
        
    } catch (error) {
        handleRequestError(res, 500, `Error al eliminar ${entity}`, error);
    }

};

module.exports = { getWarehouses, getWarehouse, createWarehouse, updateWarehouse, deleteWarehouse }