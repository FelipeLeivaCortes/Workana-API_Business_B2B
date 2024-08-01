const express = require('express');

const router = express.Router();
const validatorCreateItem = require('./../validators/articles');

const { createItemMiddleware, updateItemMiddleware } = require('./../middlewares/article');
const { createArticle, updateArticle } = require('./../controllers/article');


/**
 * openapi
 * /articles:
 *   get:
 *     tags:
 *       - Artículos
 *     summary: "Obtener lista de Artículos"
 *     description: "Obtiene un listado de todos los artículos disponibles"
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
 * /articles/{id}:
 *   get:
 *     tags:
 *       - Artículos
 *     summary: "Obtener un artículo por ID"
 *     description: "Obtiene los detalles de un artículo específico por su ID"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "ID del artículo"
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: "OK"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '404':
 *         description: "Artículo no encontrado"
 *       '500':
 *         description: "Error del servidor"
 */

/**
 * @openapi
 * /articles:
 *   post:
 *     tags:
 *       - Artículos
 *     summary: "Crear un nuevo artículo"
 *     description: "Crea un nuevo artículo con la información proporcionada"
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/articulo"
 *     responses:
 *       '201':
 *         description: "Artículo creado exitosamente"
 *       '400':
 *         description: "Solicitud incorrecta"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '500':
 *         description: "Error del servidor"
 */

/**
 * @openapi
 * /articles/{id}:
 *   put:
 *     tags:
 *       - Artículos
 *     summary: "Actualizar un artículo"
 *     description: "Actualiza la información de un artículo específico por su ID"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "ID del artículo"
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/articulo"
 *     responses:
 *       '200':
 *         description: "Artículo actualizado exitosamente"
 *       '400':
 *         description: "Solicitud incorrecta"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '404':
 *         description: "Artículo no encontrado"
 *       '500':
 *         description: "Error del servidor"
 */

/**
 * openapi
 * /articles/{id}:
 *   delete:
 *     tags:
 *       - Artículos
 *     summary: "Eliminar un artículo"
 *     description: "Elimina un artículo específico por su ID"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "ID del artículo"
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: "Artículo eliminado exitosamente"
 *       '401':
 *         description: "Sin permisos para realizar la acción"
 *       '404':
 *         description: "Artículo no encontrado"
 *       '500':
 *         description: "Error del servidor"
 */

router.post('/', createItemMiddleware, validatorCreateItem, createArticle);
router.put('/:id', updateItemMiddleware, updateArticle);

/**
 router.get('/', ApiKeyMiddleware, getArticles);
 router.get('/:id', ApiKeyMiddleware, getArticle);
 router.delete('/:id', ApiKeyMiddleware, deleteArticle);
*/
module.exports = router;