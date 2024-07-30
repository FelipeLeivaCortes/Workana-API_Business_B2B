const express = require('express');
const router = express.Router();

const ApiKeyMiddleware = require('./../middlewares/apiKey');

const { getQuotes, getQuote, createQuote, updateQuote, deleteQuote } = require('./../controllers/quote');

router.get('/', ApiKeyMiddleware, getQuotes);

router.get('/:id', ApiKeyMiddleware, getQuote);

router.post('/', ApiKeyMiddleware, createQuote);

router.put('/:id', ApiKeyMiddleware, updateQuote);

router.delete('/:id', ApiKeyMiddleware, deleteQuote);

module.exports = router;