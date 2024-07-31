const express = require('express');

const router = express.Router();
const validatorCreateItem = require('./../validators/warehouses');

const { createItemMiddleware, updateItemMiddleware } = require('./../middlewares/warehouse');
const { createWarehouse, updateWarehouse } = require('./../controllers/warehouse');


/**
 * openapi
 * /warehouses:
 *   get:
 *     tags:
 *       - Almacenes
 *     summary: "Obtener lista de Almacenes"
 *     description: "Obtiene un listado de todos los almacenes registrados"
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
 * /warehouses/{id}:
 *   get:
 *     tags:
 *       - Almacenes
 *     summary: "Obtener un almacén por ID"
 *     description: "Obtiene los detalles de un almacén específico por su ID"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "ID del almacén"
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: "OK"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '404':
 *         description: "Almacén no encontrado"
 *       '500':
 *         description: "Error del servidor"
 */

/**
 * @openapi
 * /warehouses:
 *   post:
 *     tags:
 *       - Almacenes
 *     summary: "Crear un nuevo almacén"
 *     description: "Crea un nuevo almacén con la información proporcionada"
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/warehouse"
 *     responses:
 *       '201':
 *         description: "Almacén creado exitosamente"
 *       '400':
 *         description: "Solicitud incorrecta"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '500':
 *         description: "Error del servidor"
 */

/**
 * @openapi
 * /warehouses/{id}:
 *   put:
 *     tags:
 *       - Almacenes
 *     summary: "Actualizar un almacén"
 *     description: "Actualiza la información de un almacén específico por su ID"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "ID del almacén"
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/warehouse"
 *     responses:
 *       '200':
 *         description: "Almacén actualizado exitosamente"
 *       '400':
 *         description: "Solicitud incorrecta"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '404':
 *         description: "Almacén no encontrado"
 *       '500':
 *         description: "Error del servidor"
 */

/**
 * openapi
 * /warehouses/{id}:
 *   delete:
 *     tags:
 *       - Almacenes
 *     summary: "Eliminar un almacén"
 *     description: "Elimina un almacén específico por su ID"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "ID del almacén"
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: "Almacén eliminado exitosamente"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '404':
 *         description: "Almacén no encontrado"
 *       '500':
 *         description: "Error del servidor"
 */

router.post('/', createItemMiddleware, validatorCreateItem, createWarehouse);
router.put('/:id', updateItemMiddleware, updateWarehouse);

/**
router.get('/', ApiKeyMiddleware, getWarehouses);
router.get('/:id', ApiKeyMiddleware, getWarehouse);
router.delete('/:id', ApiKeyMiddleware, deleteWarehouse);
 */

module.exports = router;