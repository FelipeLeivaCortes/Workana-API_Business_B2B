const express = require('express');
const router = express.Router();

const { getQuotes, getQuote, createQuote, updateQuote, deleteQuote } = require('./../controllers/quote');

router.get('/', getQuotes);

router.get('/:id', getQuote);

router.post('/', createQuote);

router.put('/:id', updateQuote);

router.delete('/:id', deleteQuote);

module.exports = router;