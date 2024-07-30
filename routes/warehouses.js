const express = require('express');
const router = express.Router();

const ApiKeyMiddleware = require('./../middlewares/apiKey');

const { getWarehouses, getWarehouse, createWarehouse, updateWarehouse, deleteWarehouse } = require('./../controllers/warehouse');

router.get('/', ApiKeyMiddleware, getWarehouses);

router.get('/:id', ApiKeyMiddleware, getWarehouse);

router.post('/', ApiKeyMiddleware, createWarehouse);

router.put('/:id', ApiKeyMiddleware, updateWarehouse);

router.delete('/:id', ApiKeyMiddleware, deleteWarehouse);

module.exports = router;