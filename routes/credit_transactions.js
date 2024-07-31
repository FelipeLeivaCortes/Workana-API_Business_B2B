const express = require('express');

const router = express.Router();

const { showItemMiddleware } = require('./../middlewares/credit_transaction');
const { getCreditTransactions, getCreditTransaction } = require('./../controllers/credit_transaction');


/**
 * @openapi
 * /credit_transactions:
 *   get:
 *     tags:
 *       - Facturas de Venta Pendientes
 *     summary: "Obtener lista de las facturas de ventas pendientes"
 *     description: "Obtiene un listado de todas las facturas de venta pendientes disponibles"
 *     responses:
 *       '200':
 *         description: "OK"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '500':
 *         description: "Error del servidor"
 */

/**
 * @openapi
 * /credit_transactions/{id}:
 *   get:
 *     tags:
 *       - Facturas de Venta Pendientes
 *     summary: "Obtener una factura de venta pendiente por ID"
 *     description: "Obtiene los detalles de una factura de venta pendiente específica por su ID"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "ID de la factura de venta pendiente"
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: "OK"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '404':
 *         description: "Factura no encontrada"
 *       '500':
 *         description: "Error del servidor"
 */

router.get('/', showItemMiddleware, getCreditTransactions);
router.get('/:id', showItemMiddleware, getCreditTransaction);

module.exports = router;