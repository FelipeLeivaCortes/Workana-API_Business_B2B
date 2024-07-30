const companyModel = require('./../models/companies');
const handleRequestError = require('./../utils/handleRequestError');

const entity = "Empresa";

const getCompanies = async (req, res) => {
    try {
        const companies = await companyModel.findAll();
        res.send({companies});

    } catch (error) {
        handleRequestError(res, 500, `Error al buscar ${entity}s`, error);
    }
};

const getCompany = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, `Faltan parámetros para buscar ${entity}`);
        }

        const company = await companyModel.findByPk(id);

        if (company) {
            res.send({company});

        } else {
            handleRequestError(res, 404, `${entity} no encontrada`);
        }

    } catch (error) {
        handleRequestError(res, 500, `Error al buscar ${entity}`, error);
    }
};

const createCompany = async (req, res) => {
    try {
        const body = req.body;

        if (!body) {
            return handleRequestError(res, 400, `Faltan parámetros para registrar ${entity}`);
        }

        const company = await companyModel.create(body);

        if (company) {
            res.status(201).send({ company });

        } else {
            handleRequestError(res, 404, `${entity} no registrada`);
        }

        
    } catch (error) {
        handleRequestError(res, 500, `Error al registrar ${entity}`, error);
    }
};

const updateCompany = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        if (!id || !body) {
            return handleRequestError(res, 400, `Faltan parámetros para actualizar ${entity}`);
        }

        const [updatedRows] = await companyModel.update(body, {
            where: { 'c_id': id }
        });

        if (updatedRows > 0) {
            const updatedCompany = await companyModel.findByPk(id);
            res.status(200).send({ company: updatedCompany });

        } else {
            handleRequestError(res, 404, `${entity} no encontrada`);
        }
        
    } catch (error) {
        handleRequestError(res, 500, `Error al actualizar ${entity}`, error);
    }
};

const deleteCompany = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return handleRequestError(res, 400, `Faltan parámetros para eliminar ${entity}`);
        }

        const deletedRows = await companyModel.destroy({ where: { 'c_id': id } });

        if (deletedRows > 0) {
            res.status(200).send({ message: `${entity} eliminada con éxito` });

        } else {
            handleRequestError(res, 404, `${entity} no encontrada`);

        }
        
    } catch (error) {
        handleRequestError(res, 500, `Error al eliminar ${entity}`, error);
    }

};

module.exports = { getCompanies, getCompany, createCompany, updateCompany, deleteCompany }