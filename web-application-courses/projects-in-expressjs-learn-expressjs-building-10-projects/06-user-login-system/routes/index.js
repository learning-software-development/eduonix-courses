const express = require('express');
const router = express.Router();

router.get('/', ensureAuthenticated, function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/logout', function (req, res, next) {
  req.logout();
  req.flash('success', 'You are logged out.');
  res.redirect('/login');
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.flash('failure', 'You are not authorized to view that page.');
    res.redirect('/login');
  }
}

module.exports = router;
