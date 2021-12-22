const express = require('express');
const router = express.Router();

const { body, validationResult } = require('express-validator');
const moment = require('moment');

const Category = require('../models/category');
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

router.post('/add',
  body(['title', 'Title is required']).exists(),
  body(['author', 'Author is required']).exists(),
  body(['body', 'Body is required']).exists(),
  body(['category', 'Category is required']).exists(),
  (req, res, next) => {

    const errors = validationResult(req);

    let article = {
      title: req.body.title,
      subtitle: req.body.subtitle,
      category: req.body.category,
      body: req.body.body,
      author: req.body.author,
      created_at: moment.now()
    };

    if (!errors.isEmpty()) {
      return res.render('add_article', {
        title: 'Add Article',
        errors: errors.array(),
        article,
        categories: Category.getCategories()
      });
    }

    Article.addArticle(article);

    res.redirect('/manage/articles');
  });

router.post('/edit/:id',
  body(['title', 'Title is required']).exists(),
  body(['author', 'Author is required']).exists(),
  body(['body', 'Body is required']).exists(),
  body(['category', 'Category is required']).exists(),
  (req, res, next) => {
    const errors = validationResult(req);

    let article = {
      title: req.body.title,
      subtitle: req.body.subtitle,
      category: req.body.category,
      body: req.body.body,
      author: req.body.author,
      created_at: moment.now()
    };

    if (!errors.isEmpty()) {
      return res.render('edit_article', {
        title: 'Edit Article',
        errors: errors.array(),
        article,
        categories: Category.getCategories(),
        id: req.params.id
      });
    }

    Article.updateArticle(article, req.params.id);

    res.redirect('/manage/articles');
  });

router.post('/delete/:id', (req, res, next) => {
  Article.deleteArticle(req.params.id);
  res.redirect('/manage/articles');
});

module.exports = router;
