const { check } = require('express-validator');
const validationResults = require('./../utils/handleValidator');

const validatorCreateItem = [
    check('p_id').exists().notEmpty().isInt(),
    check('ar_id').exists().notEmpty().isInt(),
    check('wh_id').exists().notEmpty().isInt(),
    check('p_value').exists().notEmpty().isFloat(),

    (req, res, next) => validationResults(req, res, next)
];


module.exports = validatorCreateItem;