const { check } = require('express-validator');
const validationResults = require('./../utils/handleValidator');

const validatorCreateItem = [
    check('stock_Quantity').exists().notEmpty().isInt(),
    check('id_sap_warehouse').exists().notEmpty().isString(),

    (req, res, next) => validationResults(req, res, next)
];


module.exports = validatorCreateItem;