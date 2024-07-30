const express = require('express');
const router = express.Router();

const { getCompanies, getCompany, createCompany, updateCompany, deleteCompany } = require('./../controllers/company');

router.get('/', getCompanies);

router.get('/:id', getCompany);

router.post('/', createCompany);

router.put('/:id', updateCompany);

router.delete('/:id', deleteCompany);

module.exports = router;