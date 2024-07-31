const express = require('express');

const router = express.Router();
const validatorCreateItem = require('./../validators/orders');

const { showItemMiddleware, createItemMiddleware, updateItemMiddleware } = require('./../middlewares/order');
const { getOrders, getOrder, createOrder, updateOrder } = require('./../controllers/order');


/**
 * @openapi
 * /orders:
 *   get:
 *     tags:
 *       - orders
 *     summary: "Obtener lista de Órdenes"
 *     description: "Obtiene un listado de todas las órdenes registradas"
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
 * /orders/{id}:
 *   get:
 *     tags:
 *       - orders
 *     summary: "Obtener una orden por ID"
 *     description: "Obtiene los detalles de una orden específica por su ID"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "ID de la orden"
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: "OK"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '404':
 *         description: "Orden no encontrada"
 *       '500':
 *         description: "Error del servidor"
 */

/**
 * @openapi
 * /orders:
 *   post:
 *     tags:
 *       - orders
 *     summary: "Crear una nueva orden"
 *     description: "Crea una nueva orden con la información proporcionada"
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/order"
 *     responses:
 *       '201':
 *         description: "Orden creada exitosamente"
 *       '400':
 *         description: "Solicitud incorrecta"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '500':
 *         description: "Error del servidor"
 */

/**
 * @openapi
 * /orders/{id}:
 *   put:
 *     tags:
 *       - orders
 *     summary: "Actualizar una orden"
 *     description: "Actualiza la información de una orden específica por su ID"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "ID de la orden"
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/order"
 *     responses:
 *       '200':
 *         description: "Orden actualizada exitosamente"
 *       '400':
 *         description: "Solicitud incorrecta"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '404':
 *         description: "Orden no encontrada"
 *       '500':
 *         description: "Error del servidor"
 */

/**
 * openapi
 * /orders/{id}:
 *   delete:
 *     tags:
 *       - orders
 *     summary: "Eliminar una orden"
 *     description: "Elimina una orden específica por su ID"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "ID de la orden"
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: "Orden eliminada exitosamente"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '404':
 *         description: "Orden no encontrada"
 *       '500':
 *         description: "Error del servidor"
 */

router.get('/', showItemMiddleware, getOrders);
router.get('/:id', showItemMiddleware, getOrder);
router.post('/', createItemMiddleware, validatorCreateItem, createOrder);
router.put('/:id', updateItemMiddleware, updateOrder);

/**
 router.delete('/:id', ApiKeyMiddleware, deleteOrder);
 */

module.exports = router;