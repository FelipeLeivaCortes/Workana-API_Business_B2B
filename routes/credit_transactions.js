const express = require('express');

const router = express.Router();

const { showItemMiddleware } = require('./../middlewares/credit_transaction');
const { getCreditTransactions, getCreditTransaction } = require('./../controllers/credit_transaction');


/**
 * @openapi
 * /credit_transactions:
 *   get:
 *     tags:
 *       - credit_transactions
 *     summary: "Obtener lista de Transacciones de Crédito"
 *     description: "Obtiene un listado de todas las transacciones de crédito disponibles"
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
 *       - credit_transactions
 *     summary: "Obtener una transacción de crédito por ID"
 *     description: "Obtiene los detalles de una transacción de crédito específica por su ID"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "ID de la transacción de crédito"
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: "OK"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '404':
 *         description: "Transacción no encontrada"
 *       '500':
 *         description: "Error del servidor"
 */

/**
 * openapi
 * /credit_transactions:
 *   post:
 *     tags:
 *       - credit_transactions
 *     summary: "Crear una nueva transacción de crédito"
 *     description: "Crea una nueva transacción de crédito con la información proporcionada"
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/credit_transaction"
 *     responses:
 *       '201':
 *         description: "Transacción creada exitosamente"
 *       '400':
 *         description: "Solicitud incorrecta"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '500':
 *         description: "Error del servidor"
 */

/**
 * openapi
 * /credit_transactions/{id}:
 *   put:
 *     tags:
 *       - credit_transactions
 *     summary: "Actualizar una transacción de crédito"
 *     description: "Actualiza la información de una transacción de crédito específica por su ID"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "ID de la transacción de crédito"
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/credit_transaction"
 *     responses:
 *       '200':
 *         description: "Transacción actualizada exitosamente"
 *       '400':
 *         description: "Solicitud incorrecta"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '404':
 *         description: "Transacción no encontrada"
 *       '500':
 *         description: "Error del servidor"
 */

/**
 * openapi
 * /credit_transactions/{id}:
 *   delete:
 *     tags:
 *       - credit_transactions
 *     summary: "Eliminar una transacción de crédito"
 *     description: "Elimina una transacción de crédito específica por su ID"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "ID de la transacción de crédito"
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: "Transacción eliminada exitosamente"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '404':
 *         description: "Transacción no encontrada"
 *       '500':
 *         description: "Error del servidor"
 */

router.get('/', showItemMiddleware, getCreditTransactions);
router.get('/:id', showItemMiddleware, getCreditTransaction);

/**
 router.post('/', ApiKeyMiddleware, validatorCreateItem, createPrice);
 router.put('/:id', updateItemMiddleware, updatePrice);
 router.delete('/:id', ApiKeyMiddleware, deletePrice);
 */

module.exports = router;