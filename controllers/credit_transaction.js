const creditTransactionModel = require('./../models/orders');
const handleRequestError = require('./../utils/handleRequestError');

const { transactionMessages } = require('./../utils/handleMessages');

const getCreditTransactions = async (req, res) => {
    try {
        const creditTransactions = await creditTransactionModel.findAll({
            where: { order_state_id: 1 }
        });
        res.send({ creditTransactions });

    } catch (error) {
        handleRequestError(res, 500, transactionMessages.handleError.getCreditTransactions, error);
    }
};

const getCreditTransaction = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, transactionMessages.notParameters);
        }

        const creditTransaction = await creditTransactionModel.findByPk(id);

        if (creditTransaction) {
            res.send({ creditTransaction });

        } else {
            handleRequestError(res, 404, transactionMessages.notFound);
        }

    } catch (error) {
        handleRequestError(res, 500, transactionMessages.handleError.getCreditTransaction, error);
    }
};

const createCreditTransaction = async (req, res) => {
    try {
        const body = req.body;

        if (!body) {
            return handleRequestError(res, 400, transactionMessages.notParameters);
        }

        const creditTransaction = await creditTransactionModel.create(body);

        if (creditTransaction) {
            res.status(201).send({ creditTransaction });

        } else {
            handleRequestError(res, 404, transactionMessages.notCreated);
        }

    } catch (error) {
        handleRequestError(res, 500, transactionMessages.handleError.createCreditTransaction, error);
    }
};

const updateCreditTransaction = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        if (!id || !body) {
            return handleRequestError(res, 400, transactionMessages.notParameters);
        }

        const [updatedRows] = await creditTransactionModel.update(body, {
            where: { 'transaction_id': id }
        });

        if (updatedRows > 0) {
            const updatedCreditTransaction = await creditTransactionModel.findByPk(id);
            res.status(200).send({ creditTransaction: updatedCreditTransaction });

        } else {
            handleRequestError(res, 404, transactionMessages.notUpdated);
        }
        
    } catch (error) {
        handleRequestError(res, 500, transactionMessages.handleError.updateCreditTransaction, error);
    }
};

const deletePrice = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400,  transactionMessages.notParameters);
        }

        const deletedRows = await creditTransactionModel.destroy({ where: { 'transaction_id': id } });

        if (deletedRows > 0) {
            res.status(200).send({ message: transactionMessages.deleted });

        } else {
            handleRequestError(res, 404, transactionMessages.notDeleted);

        }
        
    } catch (error) {
        handleRequestError(res, 500, transactionMessages.handleError.deleteCreditTransaction, error);
    }
};

module.exports = { getCreditTransactions, getCreditTransaction }