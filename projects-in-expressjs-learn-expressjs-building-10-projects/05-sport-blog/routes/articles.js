const express = require('express');
const router = express.Router();
const moment = require('moment');

const Article = require('../models/article');

router.get('/', (req, res, next) => {
  res.render('articles', { title: 'ARTICLES' });
});

router.get('/show/:id', (req, res, next) => {
  res.render('article', { title: 'ARTICLE' });
});

router.get('/category/:id', (req, res, next) => {
  res.render('articles', { title: 'CATEGORY ARTICLES' });
});

router.post('/add', (req, res, next) => {
  let article = {
    title: req.body.title,
    subtitle: req.body.subtitle,
    category: req.body.category,
    body: req.body.body,
    author: req.body.author,
    created_at: moment.now()
  };

  Article.addArticle(article);

  res.redirect('/manage/articles');
});

router.post('/edit/:id', (req, res, next) => {
  let article = {
    title: req.body.title,
    subtitle: req.body.subtitle,
    category: req.body.category,
    body: req.body.body,
    author: req.body.author,
    created_at: moment.now()
  };

  Article.updateArticle(article, req.params.id);

  res.redirect('/manage/articles');
});

router.post('/delete/:id', (req, res, next) => {
  Article.deleteArticle(req.params.id);
  res.redirect('/manage/articles');
});

module.exports = router;
