const express = require('express');

const router = express.Router();

const validatorCreateItem       = require('./../validators/stock');
const { updateItemMiddleware }  = require('./../middlewares/stock');
const { updateStock }           = require('./../controllers/stock');


/**
 * @openapi
 * /stock/{id_sap}:
 *   put:
 *     tags:
 *       - Stock
 *     summary: "Actualizar el stock"
 *     description: "Actualiza el stock del artículo por su ID SAP"
 *     parameters:
 *       - in: path
 *         name: id_sap
 *         required: true
 *         description: "ID SAP del artículo"
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/stock"
 *     responses:
 *       '200':
 *         description: "Stock actualizado exitosamente"
 *       '400':
 *         description: "Solicitud incorrecta"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '404':
 *         description: "Artículo no encontrado"
 *       '500':
 *         description: "Error del servidor"
 */

router.put('/:id_sap', updateItemMiddleware, validatorCreateItem, updateStock);

module.exports = router;