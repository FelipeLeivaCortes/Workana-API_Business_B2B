const companyModel = require('./../models/companies');
const handleRequestError = require('./../utils/handleRequestError');

const { CompanyMessages } = require('./../utils/handleMessages');

const getCompanies = async (req, res) => {
    try {
        const companies = await companyModel.findAll();
        res.send({companies});

    } catch (error) {
        handleRequestError(res, 500, CompanyMessages.getCompanies.handleError, error);
    }
};

const getCompany = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, CompanyMessages.getCompany.notParameters);
        }

        const company = await companyModel.findByPk(id);

        if (company) {
            res.send({company});

        } else {
            handleRequestError(res, 404, CompanyMessages.getCompany.notFound);
        }

    } catch (error) {
        handleRequestError(res, 500, CompanyMessages.getCompany.handleError, error);
    }
};

const createCompany = async (req, res) => {
    try {
        const body = req.body;

        if (!body) {
            return handleRequestError(res, 400, CompanyMessages.createCompany.notParameters);
        }

        const company = await companyModel.create(body);

        if (company) {
            res.status(201).send({ company });

        } else {
            handleRequestError(res, 404, CompanyMessages.createCompany.notRegistered);
        }

        
    } catch (error) {
        handleRequestError(res, 500, CompanyMessages.createCompany.handleError, error);
    }
};

const updateCompany = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        if (!id || !body) {
            return handleRequestError(res, 400, CompanyMessages.updateCompany.notParameters);
        }

        const [updatedRows] = await companyModel.update(body, {
            where: { 'c_id': id }
        });

        if (updatedRows > 0) {
            const updatedCompany = await companyModel.findByPk(id);
            res.status(200).send({ company: updatedCompany });

        } else {
            handleRequestError(res, 404, CompanyMessages.updateCompany.notUpdated);
        }
        
    } catch (error) {
        handleRequestError(res, 500, CompanyMessages.updateCompany.handleError, error);
    }
};

const deleteCompany = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, CompanyMessages.deleteCompany.notParameters);
        }

        const deletedRows = await companyModel.destroy({ where: { 'c_id': id } });

        if (deletedRows > 0) {
            res.status(200).send({ message: CompanyMessages.deleteCompany.deleted });

        } else {
            handleRequestError(res, 404, CompanyMessages.deleteCompany.notDeleted);

        }
        
    } catch (error) {
        handleRequestError(res, 500, CompanyMessages.deleteCompany.handleError, error);
    }
};

module.exports = { createCompany, updateCompany }