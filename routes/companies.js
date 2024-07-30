const express = require('express');
const router = express.Router();

const ApiKeyMiddleware = require('./../middlewares/apiKey');

const { getCompanies, getCompany, createCompany, updateCompany, deleteCompany } = require('./../controllers/company');

router.get('/', ApiKeyMiddleware, getCompanies);

router.get('/:id', ApiKeyMiddleware, getCompany);

router.post('/', ApiKeyMiddleware, createCompany);

router.put('/:id', ApiKeyMiddleware, updateCompany);

router.delete('/:id', ApiKeyMiddleware, deleteCompany);

module.exports = router;