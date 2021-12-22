const express = require('express');
const router = express.Router();

const Category = require('../models/category');
const Article = require('../models/article');

router.get('/articles', (req, res, next) => {
  let articles = Article.getArticles();
  let categories = Category.getCategories();
  res.render('manage_articles', {
    title: 'Manage Articles',
    articles,
    categories
  });
});

router.get('/categories', (req, res, next) => {
  let categories = Category.getCategories();
  res.render('manage_categories', {
    title: 'Manage Categories',
    categories
  });
});

router.get('/articles/add', (req, res, next) => {
  let categories = Category.getCategories();
  res.render('add_article', {
    title: 'Add Article',
    categories
  });
});

router.get('/categories/add', (req, res, next) => {
  res.render('add_category', { title: 'Add Category' });
});

router.get('/articles/edit/:id', (req, res, next) => {
  let article = Article.getArticleById(req.params.id);
  let categories = Category.getCategories();
  res.render('edit_article', {
    title: 'Edit Article',
    article,
    categories,
    id: req.params.id
  });
});

router.get('/categories/edit/:id', (req, res, next) => {
  let category = Category.getCategoryById(req.params.id);
  res.render('edit_category', {
    title: 'Edit Category',
    category,
    id: req.params.id
  });
});

router.get('/articles/delete/:id', (req, res, next) => {
  let article = Article.getArticleById(req.params.id);
  let categories = Category.getCategories();
  res.render('delete_article', {
    title: 'Delete Article',
    article,
    categories,
    id: req.params.id
  });
});

router.get('/categories/delete/:id', (req, res, next) => {
  let category = Category.getCategoryById(req.params.id);
  res.render('delete_category', {
    title: 'Delete Category',
    category,
    id: req.params.id
  });
});

module.exports = router;
