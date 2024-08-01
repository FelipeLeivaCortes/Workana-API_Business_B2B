const express = require('express');

const router = express.Router();
const validatorCreateItem = require('./../validators/quotes');

const { showItemMiddleware, createItemMiddleware, updateItemMiddleware } = require('./../middlewares/quote');
const { getQuotes, getQuote, createQuote, updateQuote } = require('./../controllers/quote');


/**
 * @openapi
 * /quotes:
 *   get:
 *     tags:
 *       - Ofertas de Venta
 *     summary: "Obtener lista de Cotizaciones"
 *     description: "Obtiene un listado de todas las cotizaciones registradas"
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
 * /quotes/{id}:
 *   get:
 *     tags:
 *       - Ofertas de Venta
 *     summary: "Obtener una cotización por ID"
 *     description: "Obtiene los detalles de una cotización específica por su ID"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "ID de la cotización"
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: "OK"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '404':
 *         description: "Cotización no encontrada"
 *       '500':
 *         description: "Error del servidor"
 */

/**
 * @openapi
 * /quotes:
 *   post:
 *     tags:
 *       - Ofertas de Venta
 *     summary: "Crear una nueva cotización"
 *     description: "Crea una nueva cotización con la información proporcionada"
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/oferta_venta"
 *     responses:
 *       '201':
 *         description: "Cotización creada exitosamente"
 *       '400':
 *         description: "Solicitud incorrecta"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '500':
 *         description: "Error del servidor"
 */

/**
 * @openapi
 * /quotes/{id}:
 *   put:
 *     tags:
 *       - Ofertas de Venta
 *     summary: "Actualizar una cotización"
 *     description: "Actualiza la información de una cotización específica por su ID"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "ID de la cotización"
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/oferta_venta"
 *     responses:
 *       '200':
 *         description: "Cotización actualizada exitosamente"
 *       '400':
 *         description: "Solicitud incorrecta"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '404':
 *         description: "Cotización no encontrada"
 *       '500':
 *         description: "Error del servidor"
 */

/**
 * openapi
 * /quotes/{id}:
 *   delete:
 *     tags:
 *       - Ofertas de Venta
 *     summary: "Eliminar una cotización"
 *     description: "Elimina una cotización específica por su ID"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "ID de la cotización"
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: "Cotización eliminada exitosamente"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '404':
 *         description: "Cotización no encontrada"
 *       '500':
 *         description: "Error del servidor"
 */

router.get('/', showItemMiddleware, getQuotes);
router.get('/:id', showItemMiddleware, getQuote);
router.post('/', createItemMiddleware, validatorCreateItem, createQuote);
router.put('/:id', updateItemMiddleware, updateQuote);

/**
 router.delete('/:id', ApiKeyMiddleware, deleteQuote);
 */

module.exports = router;