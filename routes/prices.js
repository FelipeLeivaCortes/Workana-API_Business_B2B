const express = require('express');
const router = express.Router();

const ApiKeyMiddleware = require('./../middlewares/apiKey');

const { getPrices, getPrice, createPrice, updatePrice, deletePrice } = require('./../controllers/price');

router.get('/', ApiKeyMiddleware, getPrices);

router.get('/:id', ApiKeyMiddleware, getPrice);

router.post('/', ApiKeyMiddleware, createPrice);

router.put('/:id', ApiKeyMiddleware, updatePrice);

router.delete('/:id', ApiKeyMiddleware, deletePrice);

module.exports = router;