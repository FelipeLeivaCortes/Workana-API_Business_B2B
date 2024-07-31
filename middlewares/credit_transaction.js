require('dotenv').config();

const handleRequestError = require('./../utils/handleRequestError');


const showItemMiddleware = (req, res, next) => {
    try {
        const API_KEYS = [process.env.API_KEY_PORTAL, process.env.API_KEY_SAP];
        const api_key = req.headers.api_key;

        if ( !API_KEYS.includes(api_key) ) {
            return handleRequestError(res, 401, 'UNAUTHORIZED');
        }

        next();

    } catch (error) {
        handleRequestError(res, 500, 'Middleware Error: Failed to update price list');
    }
}

module.exports = { showItemMiddleware };