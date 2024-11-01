const stockModel            = require('./../models/stock');
const articleModel          = require('./../models/article');
const warehouseModel        = require('./../models/warehouse');
const handleRequestError    = require('./../utils/handleRequestError');
const { stockMessages, articleMessages, warehouseMessages }     = require('./../utils/handleMessages');
const { format } = require('date-fns');

const getStocks = async (req, res) => {
    try {
        const warehouses = await warehouseModel.findAll();
        res.send({ warehouses });

    } catch (error) {
        handleRequestError(res, 500, stockMessages.handleError.getWarehouses, error);
    }
};

const getStock = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, stockMessages.notParameters);
        }

        const warehouse = await warehouseModel.findByPk(id);

        if (warehouse) {
            res.send({ warehouse });

        } else {
            handleRequestError(res, 404, stockMessages.notFound);
        }

    } catch (error) {
        handleRequestError(res, 500, stockMessages.handleError.getWarehouse, error);
    }
};

const createStock = async (req, res) => {
    try {
        const body = req.body;

        if (!body) {
            return handleRequestError(res, 400, stockMessages.notParameters);
        }

        const warehouse = await warehouseModel.create(body);

        if (warehouse) {
            res.status(201).send({ warehouse });

        } else {
            handleRequestError(res, 404, stockMessages.notCreated);
        }
        
    } catch (error) {
        handleRequestError(res, 500, stockMessages.handleError.createWarehouse, error);
    }
};

const updateStock = async (req, res) => {
    try {
        const { id_sap }    = req.params;
        const body          = req.body;

        if (!id_sap || !body) {
            return handleRequestError(res, 400, stockMessages.notParameters);
        }

        const article   = await articleModel.findOne({
            where: {
                ar_code: id_sap
            }
        });

        if (article == null) {
            handleRequestError(res, 404, articleMessages.notFound);
        
        } else {
            const warehouse = await warehouseModel.findOne({
                where: {
                    wh_code: body.id_sap_warehouse
                }
            });

            if (warehouse == null) {
                handleRequestError(res, 404, warehouseMessages.notFound);

            } else {
                const existStock = await stockModel.findOne({
                    where: {
                        ar_code: id_sap,
                        wh_id: warehouse.wh_id
                    }
                });
    
                if (existStock) {
                    const [updatedRows] = await stockModel.update({
                        stock_name: body.stock_name,
                        stock_date: Date.now(),
                        stock_Quantity: body.stock_Quantity,
                        stock_lote: body.stock_lote,
                        stock_date_entry: body.stock_date_entry,
                        stock_expiration_date: body.stock_expiration_date
                    }, {
                        where: { stock_id: existStock.stock_id }
                    });
            
                    if (updatedRows > 0) {
                        const updatedStock = await stockModel.findAll({
                            where: { stock_id: existStock.stock_id }
                        });
                        res.status(200).send({ stock: updatedStock });
            
                    } else {
                        handleRequestError(res, 404, stockMessages.notUpdated);
                    }

                } else {
                    const stock = await stockModel.create({
                        stock_name: body.stock_name,
                        stock_date: Date.now(),
                        stock_Quantity: body.stock_Quantity,
                        stock_lote: body.stock_lote,
                        stock_date_entry: body.stock_date_entry,
                        stock_expiration_date: body.stock_expiration_date,
                        ar_id: article.ar_id,
                        ar_code: article.ar_code,
                        wh_id: warehouse.wh_id
                    });
    
                    if (stock) {
                        res.status(201).send({ stock });
                    } else {
                        handleRequestError(res, 404, stockMessages.notCreated);
                    }
                }
            }
        }

    } catch (error) {
        handleRequestError(res, 500, stockMessages.handleError.update, error);
    }
};

const deleteStock = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, stockMessages.notParameters);
        }

        const deletedRows = await warehouseModel.destroy({ where: { 'wh_id': id } });

        if (deletedRows > 0) {
            res.status(200).send({ message: stockMessages.deleted });

        } else {
            handleRequestError(res, 404, stockMessages.notDeleted);

        }
        
    } catch (error) {
        handleRequestError(res, 500, stockMessages.handleError.deleteWarehouse, error);
    }

};

module.exports = { updateStock }