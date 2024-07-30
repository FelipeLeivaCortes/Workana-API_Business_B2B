require('dotenv').config();

const handleRequestError = require('./../utils/handleRequestError');

const ApiKeyMiddleware = (req, res, next) => {
    try {
        const api_key = req.headers.api_key;

        if ( process.env.API_KEY !== api_key ) {
            return handleRequestError(res, 401, 'NOT FOUND API KEY');
        }

        next();

    } catch (error) {
        handleRequestError(res, 500, 'Error API KEY');
    }
}

module.exports = ApiKeyMiddleware;