const creditTransactionModel = require('./../models/credit_transactions');
const handleRequestError = require('./../utils/handleRequestError');

const { CreditTransactionMessages } = require('./../utils/handleMessages');

const getCreditTransactions = async (req, res) => {
    try {
        const creditTransactions = await creditTransactionModel.findAll();
        res.send({creditTransactions});

    } catch (error) {
        handleRequestError(res, 500, CreditTransactionMessages.getCreditTransactions.handleError, error);
    }
};

const getCreditTransaction = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, CreditTransactionMessages.getCreditTransaction.notParameters);
        }

        const creditTransaction = await creditTransactionModel.findByPk(id);

        if (creditTransaction) {
            res.send({creditTransaction});

        } else {
            handleRequestError(res, 404, CreditTransactionMessages.getCreditTransaction.notFound);
        }

    } catch (error) {
        handleRequestError(res, 500, CreditTransactionMessages.getCreditTransaction.handleError, error);
    }
};

const createCreditTransaction = async (req, res) => {
    try {
        const body = req.body;

        if (!body) {
            return handleRequestError(res, 400, CreditTransactionMessages.createCreditTransaction.notParameters);
        }

        const creditTransaction = await creditTransactionModel.create(body);

        if (creditTransaction) {
            res.status(201).send({ creditTransaction });

        } else {
            handleRequestError(res, 404, CreditTransactionMessages.createCreditTransaction.notFound);
        }

    } catch (error) {
        handleRequestError(res, 500, CreditTransactionMessages.createCreditTransaction.handleError, error);
    }
};

const updateCreditTransaction = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        if (!id || !body) {
            return handleRequestError(res, 400, CreditTransactionMessages.updateCreditTransaction.notParameters);
        }

        const [updatedRows] = await creditTransactionModel.update(body, {
            where: { 'transaction_id': id }
        });

        if (updatedRows > 0) {
            const updatedCreditTransaction = await creditTransactionModel.findByPk(id);
            res.status(200).send({ CreditTransaction: updatedCreditTransaction });

        } else {
            handleRequestError(res, 404, CreditTransactionMessages.updateCreditTransaction.notUpdated);
        }
        
    } catch (error) {
        handleRequestError(res, 500, CreditTransactionMessages.updateCreditTransaction.handleError, error);
    }
};

const deletePrice = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400,  CreditTransactionMessages.deleteCreditTransaction.notParameters);
        }

        const deletedRows = await creditTransactionModel.destroy({ where: { 'transaction_id': id } });

        if (deletedRows > 0) {
            res.status(200).send({ message: CreditTransactionMessages.deleteCreditTransaction.deleted });

        } else {
            handleRequestError(res, 404, CreditTransactionMessages.deleteCreditTransaction.notDeleted);

        }
        
    } catch (error) {
        handleRequestError(res, 500, CreditTransactionMessages.deleteCreditTransaction.handleError, error);
    }
};

module.exports = { getCreditTransactions, getCreditTransaction }