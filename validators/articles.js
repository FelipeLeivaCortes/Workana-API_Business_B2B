const { check } = require('express-validator');
const validationResults = require('./../utils/handleValidator');

const validatorCreateItem = [
    check('ar_id').exists().notEmpty(),
    check('ar_name').exists().notEmpty().isString(),
    check('ar_desc').exists().notEmpty().isString(),
    check('ar_code').isString().optional({nullable: true}),
    check('ar_characteristics').exists().notEmpty().isString(),
    check('color_id').isInt().optional({nullable: true}),
    check('ar_measurement_value').isFloat().optional({nullable: true}),
    check('ar_img_url').exists().notEmpty().isString(),
    check('ar_data_url').isString().optional({nullable: true}),
    check('mt_id').exists().notEmpty().isInt(),
    check('cat_id').exists().notEmpty().isInt(),
    check('sbcat_id').isInt().optional({nullable: true}),
    check('status_id').isInt().optional({nullable: true}),

    (req, res, next) => validationResults(req, res, next)
];


module.exports = validatorCreateItem;