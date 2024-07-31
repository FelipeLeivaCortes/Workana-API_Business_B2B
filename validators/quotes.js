const { check } = require('express-validator');
const validationResults = require('./../utils/handleValidator');

const validatorCreateItem = [
    check('quo_id').exists().notEmpty().isInt(),
    check('quo_name').exists().notEmpty().isString(),
    check('quo_desc').exists().notEmpty().isString(),
    check('quo_date').exists().notEmpty().isISO8601(),
    check('quo_payment_method').exists().notEmpty().isString(),
    check('quo_company').exists().notEmpty().isString(),
    check('quo_shipping_address').exists().notEmpty().isString(),
    check('quo_email').exists().notEmpty().isString(),
    check('quo_phone').exists().notEmpty().isInt(),
    check('quo_comments').optional({nullable: true}).isString(),
    check('quo_cedula_nit').optional({nullable: true}).isString(),
    check('quo_subtotal').exists().notEmpty().isFloat(),
    check('quo_iva').exists().notEmpty().isFloat(),
    check('quo_total').exists().notEmpty().isFloat(),
    check('quo_discount_total').exists().notEmpty().isFloat(),
    check('quo_addition_cost').exists().notEmpty().isFloat(),
    check('quo_url_document').optional({nullable: true}).isString(),
    check('u_id').exists().notEmpty().isInt(),
    check('quote_state_id').optional({nullable: true}).isInt(),

    (req, res, next) => validationResults(req, res, next)
];


module.exports = validatorCreateItem;