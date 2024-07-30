const express = require('express');
const router = express.Router();

const { getWarehouses, getWarehouse, createWarehouse, updateWarehouse, deleteWarehouse } = require('./../controllers/warehouse');

router.get('/', getWarehouses);

router.get('/:id', getWarehouse);

router.post('/', createWarehouse);

router.put('/:id', updateWarehouse);

router.delete('/:id', deleteWarehouse);

module.exports = router;