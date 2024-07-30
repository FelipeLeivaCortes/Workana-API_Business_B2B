const express = require('express');
const router = express.Router();

const { getOrders, getOrder, createOrder, updateOrder, deleteOrder } = require('./../controllers/order');

router.get('/', getOrders);

router.get('/:id', getOrder);

router.post('/', createOrder);

router.put('/:id', updateOrder);

router.delete('/:id', deleteOrder);

module.exports = router;