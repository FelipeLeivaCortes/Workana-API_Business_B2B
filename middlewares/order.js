require('dotenv').config();

const handleRequestError = require('./../utils/handleRequestError');

const createItemMiddleware = (req, res, next) => {
    try {
        const API_KEYS      = [process.env.API_KEY_PORTAL];
        const bearerToken   = req.headers.authorization;
        const myToken       = bearerToken.replace('Bearer ', '');

        if ( !API_KEYS.includes(myToken) ) {
            return handleRequestError(res, 401, 'UNAUTHORIZED');
        }

        next();

    } catch (error) {
        handleRequestError(res, 500, 'Middleware Error: Failed to create order');
    }
} 

const updateItemMiddleware = (req, res, next) => {
    try {
        const API_KEYS      = [process.env.API_KEY_PORTAL, process.env.API_KEY_SAP];
        const bearerToken   = req.headers.authorization ?? '';
        const myToken       = bearerToken.replace('Bearer ', '');

        if ( !API_KEYS.includes(myToken) ) {
            return handleRequestError(res, 401, 'UNAUTHORIZED');
        }

        next();

    } catch (error) {
        handleRequestError(res, 500, 'Middleware Error: Failed to update order');
    }
}

const showItemMiddleware = (req, res, next) => {
    try {
        const API_KEYS      = [process.env.API_KEY_PORTAL, process.env.API_KEY_SAP];
        const bearerToken   = req.headers.authorization ?? '';
        const myToken       = bearerToken.replace('Bearer ', '');

        if ( !API_KEYS.includes(myToken) ) {
            return handleRequestError(res, 401, 'UNAUTHORIZED');
        }

        next();

    } catch (error) {
        handleRequestError(res, 500, 'Middleware Error: Failed to show order');
    }
}

module.exports = { createItemMiddleware, updateItemMiddleware, showItemMiddleware };