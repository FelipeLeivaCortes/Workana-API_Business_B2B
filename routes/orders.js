const express = require('express');
const router = express.Router();

const ApiKeyMiddleware = require('./../middlewares/apiKey');

const { getOrders, getOrder, createOrder, updateOrder, deleteOrder } = require('./../controllers/order');

router.get('/', ApiKeyMiddleware, getOrders);

router.get('/:id', ApiKeyMiddleware, getOrder);

router.post('/', ApiKeyMiddleware, createOrder);

router.put('/:id', ApiKeyMiddleware, updateOrder);

router.delete('/:id', ApiKeyMiddleware, deleteOrder);

module.exports = router;