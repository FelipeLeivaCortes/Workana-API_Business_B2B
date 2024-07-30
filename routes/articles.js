const express = require('express');
const router = express.Router();

const ApiKeyMiddleware = require('./../middlewares/apiKey');

const { getArticles, getArticle, createArticle, updateArticle, deleteArticle } = require('./../controllers/article');

router.get('/', ApiKeyMiddleware, getArticles);

router.get('/:id', ApiKeyMiddleware, getArticle);

router.post('/', ApiKeyMiddleware, createArticle);

router.put('/:id', ApiKeyMiddleware, updateArticle);

router.delete('/:id', ApiKeyMiddleware, deleteArticle);

module.exports = router;