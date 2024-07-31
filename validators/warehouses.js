const { check } = require('express-validator');
const validationResults = require('./../utils/handleValidator');

const validatorCreateItem = [
    check('wh_id').exists().notEmpty().isInt(),
    check('wh_name').optional({nullable: true}).isString(),
    check('wh_desc').optional({nullable: true}).isString(),
    check('wh_code').optional({nullable: true}).isString(),
    check('wh_address').optional({nullable: true}).isString(),
    check('wh_departament').optional({nullable: true}).isString(),
    check('wh_city').optional({nullable: true}).isString(),
    check('wh_date').optional({nullable: true}).isISO8601(),
    check('wh_responsible').optional({nullable: true}).isString(),
    check('wh_phone').optional({nullable: true}).isString(),
    check('c_id').exists().notEmpty().isInt(),

    (req, res, next) => validationResults(req, res, next)
];


module.exports = validatorCreateItem;