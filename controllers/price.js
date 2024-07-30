const priceModel = require('./../models/prices');
const handleRequestError = require('./../utils/handleRequestError');

const entity = "Precios";

const getPrices = async (req, res) => {
    try {
        const Prices = await priceModel.findAll();
        res.send({Prices});

    } catch (error) {
        handleRequestError(res, 500, `Error al buscar ${entity}s`, error);
    }
};

const getPrice = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, `Faltan parámetros para buscar ${entity}`);
        }

        const Price = await priceModel.findByPk(id);

        if (Price) {
            res.send({Price});

        } else {
            handleRequestError(res, 404, `${entity} no encontrado`);
        }

    } catch (error) {
        handleRequestError(res, 500, `Error al buscar ${entity}`, error);
    }
};

const createPrice = async (req, res) => {
    try {
        const body = req.body;

        if (!body) {
            return handleRequestError(res, 400, `Faltan parámetros para registrar ${entity}`);
        }

        const Price = await priceModel.create(body);

        if (Price) {
            res.status(201).send({ Price });

        } else {
            handleRequestError(res, 404, `${entity} no registrada`);
        }

        
    } catch (error) {
        handleRequestError(res, 500, `Error al registrar ${entity}`, error);
    }
};

const updatePrice = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        if (!id || !body) {
            return handleRequestError(res, 400, `Faltan parámetros para actualizar ${entity}`);
        }

        const [updatedRows] = await priceModel.update(body, {
            where: { 'p_id': id }
        });

        if (updatedRows > 0) {
            const updatedPrice = await priceModel.findByPk(id);
            res.status(200).send({ Price: updatedPrice });

        } else {
            handleRequestError(res, 404, `${entity} no actualizada`);
        }
        
    } catch (error) {
        handleRequestError(res, 500, `Error al actualizar ${entity}`, error);
    }
};

const deletePrice = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, `Faltan parámetros para eliminar ${entity}`);
        }

        const deletedRows = await priceModel.destroy({ where: { 'p_id': id } });

        if (deletedRows > 0) {
            res.status(200).send({ message: `${entity} eliminada con éxito` });

        } else {
            handleRequestError(res, 404, `${entity} no encontrada`);

        }
        
    } catch (error) {
        handleRequestError(res, 500, `Error al eliminar ${entity}`, error);
    }

};

module.exports = { getPrices, getPrice, createPrice, updatePrice, deletePrice }