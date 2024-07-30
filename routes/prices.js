const express = require('express');
const router = express.Router();

const { getPrices, getPrice, createPrice, updatePrice, deletePrice } = require('./../controllers/price');

router.get('/', getPrices);

router.get('/:id', getPrice);

router.post('/', createPrice);

router.put('/:id', updatePrice);

router.delete('/:id', deletePrice);

module.exports = router;