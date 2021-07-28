const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('articles', { title: 'ARTICLES' });
});

router.get('/show/:id', (req, res, next) => {
  res.render('article', { title: 'ARTICLE' });
});

router.get('/category/:id', (req, res, next) => {
  res.render('articles', { title: 'CATEGORY ARTICLES' });
});

module.exports = router;
