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
 *       - companies
 *     summary: "Obtener lista de Empresas"
 *     description: "Obtiene un listado de todas las empresas registradas"
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
 *       - companies
 *     summary: "Obtener una empresa por ID"
 *     description: "Obtiene los detalles de una empresa específica por su ID"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "ID de la empresa"
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
 *       - companies
 *     summary: "Crear una nueva empresa"
 *     description: "Crea una nueva empresa con la información proporcionada"
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/company"
 *     responses:
 *       '201':
 *         description: "Empresa creada exitosamente"
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
 *       - companies
 *     summary: "Actualizar una empresa"
 *     description: "Actualiza la información de una empresa específica por su ID"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "ID de la empresa"
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/company"
 *     responses:
 *       '200':
 *         description: "Empresa actualizada exitosamente"
 *       '400':
 *         description: "Solicitud incorrecta"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '404':
 *         description: "Empresa no encontrada"
 *       '500':
 *         description: "Error del servidor"
 */

/**
 * openapi
 * /companies/{id}:
 *   delete:
 *     tags:
 *       - companies
 *     summary: "Eliminar una empresa"
 *     description: "Elimina una empresa específica por su ID"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "ID de la empresa"
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: "Empresa eliminada exitosamente"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '404':
 *         description: "Empresa no encontrada"
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