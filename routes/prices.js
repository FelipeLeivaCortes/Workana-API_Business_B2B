const express = require('express');

const router = express.Router();

const { showItemMiddleware, updateItemMiddleware } = require('./../middlewares/price');
const { getPrice, updatePrice } = require('./../controllers/price');

/**
 * openapi
 * /prices:
 *   get:
 *     tags:
 *       - Lista de Precios
 *     summary: "Obtener lista de Precios"
 *     description: "Obtiene un listado de todos los precios registrados"
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
 * /prices/{id_sap}:
 *   get:
 *     tags:
 *       - Lista de Precios
 *     summary: "Obtener un precio por ID SAP"
 *     description: "Obtiene los detalles de un precio específico por el ID SAP"
 *     parameters:
 *       - in: path
 *         name: id_sap
 *         required: true
 *         description: "ID SAP del precio"
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: "OK"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '404':
 *         description: "Precio no encontrado"
 *       '500':
 *         description: "Error del servidor"
 */

/**
 * openapi
 * /prices:
 *   post:
 *     tags:
 *       - Lista de Precios
 *     summary: "Crear un nuevo precio"
 *     description: "Crea un nuevo precio con la información proporcionada"
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/lista_precios"
 *     responses:
 *       '201':
 *         description: "Precio creado exitosamente"
 *       '400':
 *         description: "Solicitud incorrecta"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '500':
 *         description: "Error del servidor"
 */

/**
 * @openapi
 * /prices/{id_sap}:
 *   put:
 *     tags:
 *       - Lista de Precios
 *     summary: "Actualizar un precio por el ID SAP"
 *     description: "Actualiza la información de un precio específico por su ID SAP"
 *     parameters:
 *       - in: path
 *         name: id_sap
 *         required: true
 *         description: "ID SAP del precio"
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/lista_precios"
 *     responses:
 *       '200':
 *         description: "Precio actualizado exitosamente"
 *       '400':
 *         description: "Solicitud incorrecta"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '404':
 *         description: "Precio no encontrado"
 *       '500':
 *         description: "Error del servidor"
 */

/**
 * openapi
 * /prices/{id}:
 *   delete:
 *     tags:
 *       - Lista de Precios
 *     summary: "Eliminar un precio"
 *     description: "Elimina un precio específico por su ID"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "ID del precio"
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: "Precio eliminado exitosamente"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '404':
 *         description: "Precio no encontrado"
 *       '500':
 *         description: "Error del servidor"
 */

router.get('/:id_sap', showItemMiddleware, getPrice);
router.put('/:id_sap', updateItemMiddleware, updatePrice);

/**
router.get('/', ApiKeyMiddleware, getPrices);
router.post('/', ApiKeyMiddleware, validatorCreateItem, createPrice);
router.delete('/:id', ApiKeyMiddleware, deletePrice);
 */

module.exports = router;