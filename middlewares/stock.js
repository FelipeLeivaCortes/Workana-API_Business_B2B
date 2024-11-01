require('dotenv').config();

const handleRequestError = require('./../utils/handleRequestError');

const updateItemMiddleware = (req, res, next) => {
    try {
        const API_KEYS      = [process.env.API_KEY_SAP, process.env.API_KEY_PORTAL];
        const bearerToken   = req.headers.authorization ?? '';
        const myToken       = bearerToken.replace('Bearer ', '');

        if ( !API_KEYS.includes(myToken) ) {
            return handleRequestError(res, 401, 'UNAUTHORIZED');
        }

        next();

    } catch (error) {
        handleRequestError(res, 500, 'Middleware Error: Failed to update Stock');
    }
}

module.exports = { updateItemMiddleware };