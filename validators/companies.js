const { check } = require('express-validator');
const validationResults = require('./../utils/handleValidator');

const validatorCreateItem = [
    check('c_id').exists().notEmpty().isInt(),
    check('c_name').optional({nullable: true}).isString(),
    check('c_desc').optional({nullable: true}).isString(),
    check('c_num_nit').optional({nullable: true}).isString(),
    check('c_num_ver_nit').optional({nullable: true}).isInt(),
    check('c_num_nit').optional({nullable: true}).isString(),
    check('c_route_rut').optional({nullable: true}).isString(),
    check('c_route_cc_representant').optional({nullable: true}).isString(),
    check('c_chamber_commerce').optional({nullable: true}).isString(),
    check('c_form_inscription').optional({nullable: true}).isString(),
    check('c_certificate_bank').optional({nullable: true}).isString(),
    check('c_street').optional({nullable: true}).isString(),
    check('c_apartament').optional({nullable: true}).isString(),
    check('c_country').optional({nullable: true}).isString(),
    check('c_city').optional({nullable: true}).isString(),
    check('c_state').optional({nullable: true}).isString(),
    check('c_postal_code').optional({nullable: true}).isInt(),
    check('c_shippingStreet').optional({nullable: true}).isString(),
    check('c_shippingApartament').optional({nullable: true}).isString(),
    check('c_shippingCountry').optional({nullable: true}).isString(),
    check('c_shippingCity').optional({nullable: true}).isString(),
    check('c_shippingState').optional({nullable: true}).isString(),
    check('c_shippingPostalcode').optional({nullable: true}).isInt(),
    check('c_dateQuoteValidity').optional({nullable: true}).isISO8601(),
    check('created_at').exists().notEmpty().isISO8601(),
    check('id_subs').optional({nullable: true}).isInt(),
    check('tpi_id').optional({nullable: true}).isInt(),
    check('status_id').exists().notEmpty().isInt(),
    check('s_id').optional({nullable: true}).isInt(),

    (req, res, next) => validationResults(req, res, next)
];


module.exports = validatorCreateItem;