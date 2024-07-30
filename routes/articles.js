const express = require('express');
const router = express.Router();

const { getArticles, getArticle, createArticle, updateArticle, deleteArticle } = require('./../controllers/article');

router.get('/', getArticles);

router.get('/:id', getArticle);

router.post('/', createArticle);

router.put('/:id', updateArticle);

router.delete('/:id', deleteArticle);

module.exports = router;