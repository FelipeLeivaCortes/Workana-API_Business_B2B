const express = require('express');

const router = express.Router();
const validatorCreateItem = require('./../validators/payments');

const { createItemMiddleware } = require('./../middlewares/payment');
const { createPayment } = require('./../controllers/payment');

/**
 * openapi
 * /payments:
 *   get:
 *     tags:
 *       - Métodos de Pagos
 *     summary: "Obtener lista de pagos"
 *     description: "Obtiene un listado de todos los pagos registrados"
 *     responses:
 *       '200':
 *         description: "OK"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '500':
 *         description: "Error del servidor"
 */

/**
 * openapi
 * /payments/{id}:
 *   get:
 *     tags:
 *       - Métodos de Pagos
 *     summary: "Obtener un pago por ID"
 *     description: "Obtiene los detalles de un pago específico por su ID"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "ID del pago"
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: "OK"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '404':
 *         description: "Pago no encontrado"
 *       '500':
 *         description: "Error del servidor"
 */

/**
 * @openapi
 * /payments:
 *   post:
 *     tags:
 *       - Métodos de Pagos
 *     summary: "Crear un nuevo pago"
 *     description: "Crea un nuevo pago con la información proporcionada"
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Payment"
 *     responses:
 *       '201':
 *         description: "Pago creado exitosamente"
 *       '400':
 *         description: "Solicitud incorrecta"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '500':
 *         description: "Error del servidor"
 */

/**
 * openapi
 * /payments/{id}:
 *   put:
 *     tags:
 *       - Métodos de Pagos
 *     summary: "Actualizar un pago"
 *     description: "Actualiza la información de un pago específico por su ID"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "ID del pago"
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Payment"
 *     responses:
 *       '200':
 *         description: "Pago actualizado exitosamente"
 *       '400':
 *         description: "Solicitud incorrecta"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '404':
 *         description: "Pago no encontrado"
 *       '500':
 *         description: "Error del servidor"
 */

/**
 * openapi
 * /payments/{id}:
 *   delete:
 *     tags:
 *       - Métodos de Pagos
 *     summary: "Eliminar un pago"
 *     description: "Elimina un pago específico por su ID"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "ID del pago"
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: "Pago eliminado exitosamente"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '404':
 *         description: "Pago no encontrado"
 *       '500':
 *         description: "Error del servidor"
 */


router.post('/', createItemMiddleware, validatorCreateItem, createPayment);

/**
 router.get('/', showItemMiddleware, getWarehouses);
 router.get('/:id', showItemMiddleware, getWarehouse);
 router.put('/:id', updateItemMiddleware, updateWarehouse);
 router.delete('/:id', deleteItemMiddleware, deleteWarehouse);
 */

module.exports = router;