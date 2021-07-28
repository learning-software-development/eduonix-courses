const express = require('express');
const router = express.Router();

const Category = require('../models/category');

/* GET home page. */
router.get('/', (req, res, next) => {
  let categories = Category.getCategory();
  res.render('categories', {
    title: 'Categories',
    categories
  });
});

router.post('/add', (req, res, next) => {
  let category = {
    title: req.body.title,
    description: req.body.description
  };

  Category.addCategory(category);

  res.redirect('/manage/categories');
});

module.exports = router;
