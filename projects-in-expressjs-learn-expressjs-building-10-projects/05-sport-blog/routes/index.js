const express = require('express');
const router = express.Router();

const Article = require('../models/article');

router.get('/', (req, res, next) => {
  let articles = Article.getArticles();
  res.render('index', { title: 'Sports Blog', articles });
});

module.exports = router;
