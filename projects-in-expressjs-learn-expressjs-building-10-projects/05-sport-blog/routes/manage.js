const express = require('express');
const router = express.Router();

const Category = require('../models/category');

router.get('/articles', (req, res, next) => {
  res.render('manage_articles', { title: 'MANAGE ARTICLES' });
});

router.get('/categories', (req, res, next) => {
  let categories = Category.getCategory();
  res.render('manage_categories', {
    title: 'Manage Categories',
    categories
  });
});

router.get('/articles/add', (req, res, next) => {
  res.render('add_article', {title: 'CREATE ARTICLE'});
});

router.get('/categories/add', (req, res, next) => {
  res.render('add_categories', {title: 'Add Category'});
});

router.get('/articles/edit/:id', (req, res, next) => {
  res.render('edit_articles', { title: 'EDIT ARTICLES' });
});

router.get('/categories/edit/:id', (req, res, next) => {
  res.render('edit_categories', { title: 'EDIT CATEGORIES' });
});

module.exports = router;
