const { check } = require('express-validator');
const validationResults = require('./../utils/handleValidator');

const validatorCreateItem = [
    check('order_name').exists().notEmpty().isString(),
    check('order_desc').exists().notEmpty().isString(),
    check('order_date').exists().notEmpty().isISO8601(),
    check('order_payment_method').exists().notEmpty().isString(),
    check('order_company').exists().notEmpty().isString(),
    check('order_shipping_address').exists().notEmpty().isString(),
    check('order_email').exists().notEmpty().isString(),
    check('order_phone').exists().notEmpty().isString(),
    check('order_comments').exists().notEmpty().isString(),
    check('order_cedula_nit').optional({nullable: true}).isString(),
    check('order_subtotal').exists().notEmpty().isFloat(),
    check('order_iva').exists().notEmpty().isFloat(),
    check('order_total').exists().notEmpty().isFloat(),
    check('order_discount_total').exists().notEmpty().isFloat(),
    check('order_addition_cost').exists().notEmpty().isFloat(),
    check('order_url_document').optional({nullable: true}).isString(),
    check('u_id').exists().notEmpty().isInt(),
    check('order_state_id').optional({nullable: true}).isInt(),

    (req, res, next) => validationResults(req, res, next)
];


module.exports = validatorCreateItem;