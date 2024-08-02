const creditTransactionModel = require('./../models/order');
const articleModel = require('./../models/article');

const handleRequestError = require('./../utils/handleRequestError');
const isValidDate = require('./../utils/handleDates');
const { parseISO, formatISO } = require('date-fns');

const { Op } = require('sequelize');
const { creditTransactionMessages } = require('./../utils/handleMessages');


const getCreditTransactions = async (req, res) => {
    try {
        let { from, to } = req.query;
    
        if (!isValidDate(from)) {
            return handleRequestError(res, 400, 'ERROR FROM DATE');
        }

        from = formatISO(parseISO(`${from}T00:00:00Z`));
        
        if (!to || !isValidDate(to)) {
            const endOfDay = new Date();
            endOfDay.setUTCHours(23, 59, 59, 999);

            to = endOfDay.toISOString();
        } else {
            to = formatISO(parseISO(`${to}T23:59:59Z`));
        }

        const creditTransactions = await creditTransactionModel.findAll({
            where: {
                order_state_id: 1,
                order_date: {
                    [Op.gte]: from,
                    [Op.lte]: to,
                }
            }
        });

        res.send({ creditTransactions });

    } catch (error) {
        handleRequestError(res, 500, creditTransactionMessages.handleError.getCreditTransactions, error);
    }
};

const getCreditTransaction = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, creditTransactionMessages.notParameters);
        }

        const creditTransaction = await creditTransactionModel.findByPk(id, {
            include: [{
                model: articleModel,
                through: { attributes: [] } // Esto excluye los datos de la tabla intermedia
            }]
        });

        if (creditTransaction) {
            res.send({ creditTransaction });

        } else {
            handleRequestError(res, 404, creditTransactionMessages.notFound);
        }

    } catch (error) {
        handleRequestError(res, 500, creditTransactionMessages.handleError.getCreditTransaction, error);
    }
};

const createCreditTransaction = async (req, res) => {
    try {
        const body = req.body;

        if (!body) {
            return handleRequestError(res, 400, creditTransactionMessages.notParameters);
        }

        const creditTransaction = await creditTransactionModel.create(body);

        if (creditTransaction) {
            res.status(201).send({ creditTransaction });

        } else {
            handleRequestError(res, 404, creditTransactionMessages.notCreated);
        }

    } catch (error) {
        handleRequestError(res, 500, creditTransactionMessages.handleError.createCreditTransaction, error);
    }
};

const updateCreditTransaction = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        if (!id || !body) {
            return handleRequestError(res, 400, creditTransactionMessages.notParameters);
        }

        const [updatedRows] = await creditTransactionModel.update(body, {
            where: { 'transaction_id': id }
        });

        if (updatedRows > 0) {
            const updatedCreditTransaction = await creditTransactionModel.findByPk(id);
            res.status(200).send({ creditTransaction: updatedCreditTransaction });

        } else {
            handleRequestError(res, 404, creditTransactionMessages.notUpdated);
        }
        
    } catch (error) {
        handleRequestError(res, 500, creditTransactionMessages.handleError.updateCreditTransaction, error);
    }
};

const deletePrice = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400,  creditTransactionMessages.notParameters);
        }

        const deletedRows = await creditTransactionModel.destroy({ where: { 'transaction_id': id } });

        if (deletedRows > 0) {
            res.status(200).send({ message: creditTransactionMessages.deleted });

        } else {
            handleRequestError(res, 404, creditTransactionMessages.notDeleted);

        }
        
    } catch (error) {
        handleRequestError(res, 500, creditTransactionMessages.handleError.deleteCreditTransaction, error);
    }
};

module.exports = { getCreditTransactions, getCreditTransaction }