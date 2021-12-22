const express = require('express');
const router = express.Router();

const { body, validationResult } = require('express-validator');

const Category = require('../models/category');

/* GET home page. */
router.get('/', (req, res, next) => {
  let categories = Category.getCategories();
  res.render('categories', {
    title: 'Categories',
    categories
  });
});

router.post('/add', body('title', 'Title is required').notEmpty(), (req, res, next) => {
  const errors = validationResult(req);

  let category = {
    title: req.body.title,
    description: req.body.description
  };

  if (!errors.isEmpty()) {
    res.render('add_category', {
      title: 'Add Category',
      errors: errors.array(),
      category
    });
  } else {
    Category.addCategory(category);

    req.flash('success', 'Category Saved');
    res.redirect('/manage/categories');
  }

});

router.post('/edit/:id', body('title', 'Title is required').exists(), (req, res, next) => {
  const errors = validationResult(req);

  let category = {
    title: req.body.title,
    description: req.body.description
  };

  if (!errors.isEmpty()) {
    res.render('edit_category', {
      title: 'Edit Category',
      errors: errors.array(),
      category,
      id: req.params.id
    });
  } else {
    Category.updateCategory(category, req.params.id);

    req.flash('success', 'Category Updated');
    res.redirect('/manage/categories');
  }

});

router.post('/delete/:id', (req, res, next) => {
  Category.deleteCategory(req.params.id);
  res.redirect('/manage/categories');
});

module.exports = router;
