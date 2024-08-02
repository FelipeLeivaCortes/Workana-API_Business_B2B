const companyModel = require('./../models/company');
const handleRequestError = require('./../utils/handleRequestError');

const { companyMessages } = require('./../utils/handleMessages');

const getCompanies = async (req, res) => {
    try {
        const companies = await companyModel.findAll();
        res.send({ companies });

    } catch (error) {
        handleRequestError(res, 500, companyMessages.handleError.getCompanies, error);
    }
};

const getCompany = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, companyMessages.notParameters);
        }

        const company = await companyModel.findByPk(id);

        if (company) {
            res.send({ company });

        } else {
            handleRequestError(res, 404, companyMessages.notFound);
        }

    } catch (error) {
        handleRequestError(res, 500, companyMessages.handleError.getCompany, error);
    }
};

const createCompany = async (req, res) => {
    try {
        const body = req.body;

        if (!body) {
            return handleRequestError(res, 400, companyMessages.notParameters);
        }

        const company = await companyModel.create(body);

        if (company) {
            res.status(201).send({ company });

        } else {
            handleRequestError(res, 404, companyMessages.notCreated);
        }
        
    } catch (error) {
        handleRequestError(res, 500, companyMessages.handleError.createCompany, error);
    }
};

const updateCompany = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        if (!id || !body) {
            return handleRequestError(res, 400, companyMessages.notParameters);
        }

        const [updatedRows] = await companyModel.update(body, {
            where: { 'c_id': id }
        });

        if (updatedRows > 0) {
            const updatedCompany = await companyModel.findByPk(id);
            res.status(200).send({ company: updatedCompany });

        } else {
            handleRequestError(res, 404, companyMessages.notUpdated);
        }
        
    } catch (error) {
        handleRequestError(res, 500, companyMessages.handleError.updateCompany, error);
    }
};

const deleteCompany = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, companyMessages.notParameters);
        }

        const deletedRows = await companyModel.destroy({ where: { 'c_id': id } });

        if (deletedRows > 0) {
            res.status(200).send({ message: companyMessages.deleted });

        } else {
            handleRequestError(res, 404, companyMessages.notDeleted);

        }
        
    } catch (error) {
        handleRequestError(res, 500, companyMessages.handleError.deleteCompany, error);
    }
};

module.exports = { createCompany, updateCompany }