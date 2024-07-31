const { check } = require('express-validator');
const validationResults = require('./../utils/handleValidator');

const validatorCreateItem = [
    check('name').optional({nullable: true}).isString(),

    (req, res, next) => validationResults(req, res, next)
];


module.exports = validatorCreateItem;