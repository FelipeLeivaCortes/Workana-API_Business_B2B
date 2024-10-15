const { check } = require('express-validator');
const validationResults = require('./../utils/handleValidator');

const validatorCreateItem = [
    check('ar_id').exists().notEmpty().isInt(),
    check('wh_id').exists().notEmpty().isInt(),
    check('p_value').exists().notEmpty().isFloat(),
    check('id_sap').exists().notEmpty().isString(),

    (req, res, next) => validationResults(req, res, next)
];


module.exports = validatorCreateItem;