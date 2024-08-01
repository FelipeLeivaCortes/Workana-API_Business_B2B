const express = require('express');

const router = express.Router();
const validatorCreateItem = require('./../validators/companies');

const { createItemMiddleware, updateItemMiddleware } = require('./../middlewares/company');
const { createCompany, updateCompany } = require('./../controllers/company');


/**
 * openapi
 * /companies:
 *   get:
 *     tags:
 *       - Clientes
 *     summary: "Obtener lista de Clientes"
 *     description: "Obtiene un listado de todos los clientes registrados"
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
 * /companies/{id}:
 *   get:
 *     tags:
 *       - Clientes
 *     summary: "Obtener una cliente por ID"
 *     description: "Obtiene los detalles de un cliente específico por su ID"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "ID de cliente"
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: "OK"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '404':
 *         description: "Empresa no encontrada"
 *       '500':
 *         description: "Error del servidor"
 */

/**
 * @openapi
 * /companies:
 *   post:
 *     tags:
 *       - Clientes
 *     summary: "Crear un nuevo cliente"
 *     description: "Crea un nuevo cliente con la información proporcionada"
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/cliente"
 *     responses:
 *       '201':
 *         description: "Cliente creado exitosamente"
 *       '400':
 *         description: "Solicitud incorrecta"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '500':
 *         description: "Error del servidor"
 */

/**
 * @openapi
 * /companies/{id}:
 *   put:
 *     tags:
 *       - Clientes
 *     summary: "Actualizar un cliente"
 *     description: "Actualiza la información de un cliente específica por su ID"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "ID del cliente"
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/cliente"
 *     responses:
 *       '200':
 *         description: "Cliente actualizado exitosamente"
 *       '400':
 *         description: "Solicitud incorrecta"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '404':
 *         description: "Cliente no encontrado"
 *       '500':
 *         description: "Error del servidor"
 */

/**
 * openapi
 * /companies/{id}:
 *   delete:
 *     tags:
 *       - Clientes
 *     summary: "Eliminar un cliente"
 *     description: "Elimina un cliente específico por su ID"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "ID del cliente"
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: "Cliente eliminado exitosamente"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '404':
 *         description: "Cliente no encontrado"
 *       '500':
 *         description: "Error del servidor"
 */

router.post('/', createItemMiddleware, validatorCreateItem, createCompany);
router.put('/:id', updateItemMiddleware, updateCompany);

/**
router.get('/', ApiKeyMiddleware, getCompanies);
router.get('/:id', ApiKeyMiddleware, getCompany);
router.delete('/:id', ApiKeyMiddleware, deleteCompany);
*/

module.exports = router;