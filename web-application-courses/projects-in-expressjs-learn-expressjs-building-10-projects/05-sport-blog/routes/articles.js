const express = require('express');
const router = express.Router();

const { body, validationResult } = require('express-validator');
const moment = require('moment');

const Category = require('../models/category');
const Article = require('../models/article');

router.get('/', (req, res, next) => {
  let articles = Article.getArticles();
  res.render('articles', { title: 'Articles', articles });
});

router.get('/show/:id', (req, res, next) => {
  let article = Article.getArticleById(req.params.id);
  res.render('article', { article });
});

router.get('/category/:id', (req, res, next) => {
  res.render('articles', { title: 'CATEGORY ARTICLES' });
});

router.post('/add',
  body('title', 'Title is required').exists(),
  body('author', 'Author is required').exists(),
  body('body', 'Body is required').exists(),
  body('category', 'Category is required').exists(),
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
      res.render('add_article', {
        title: 'Add Article',
        errors: errors.array(),
        article,
        categories: Category.getCategories()
      });
    } else {
      Article.addArticle(article);

      req.flash('success', 'Article Updated');
      res.redirect('/manage/articles');
    }

  });

router.post('/edit/:id',
  body('title', 'Title is required').exists(),
  body('author', 'Author is required').exists(),
  body('body', 'Body is required').exists(),
  body('category', 'Category is required').exists(),
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
      res.render('edit_article', {
        title: 'Edit Article',
        errors: errors.array(),
        article,
        categories: Category.getCategories(),
        id: req.params.id
      });
    } else {
      Article.updateArticle(article, req.params.id);

      req.flash('success', 'Article Updated');
      res.redirect('/manage/articles');
    }

  });

router.post('/delete/:id', (req, res, next) => {
  Article.deleteArticle(req.params.id);
  res.redirect('/manage/articles');
});

module.exports = router;
