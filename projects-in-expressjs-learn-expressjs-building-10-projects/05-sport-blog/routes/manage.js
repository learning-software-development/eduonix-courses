var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('manage', { title: 'MANAGE' });
});

router.get('/articles/add', (req, res, next) => {
  res.render('add_article', {title: 'Create Article'});
});

router.get('/categories/add', (req, res, next) => {
  res.render('add_categories', {title: 'Create Categories'});
});

module.exports = router;
