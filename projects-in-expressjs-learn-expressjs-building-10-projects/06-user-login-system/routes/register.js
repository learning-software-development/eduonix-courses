const express = require('express');
const router = express.Router();

const { body, validationResult } = require('express-validator');

router.get('/', function (req, res, next) {
  res.render('register', { title: 'User Registration', userDetails: {} });
});

router.post('/',
  body('name', 'Name is required').exists(),
  body('username', 'Username is required').exists(),
  body('email', 'Email is required').exists(),
  body('email', 'Email must be a valid email address').isEmail().normalizeEmail(),
  body('password', 'Password is required').exists(),
  body('password_confirm', 'Password do not match').exists().custom((value, { req }) => value === req.body.password),
  (req, res, next) => {

    let userDetails = {
      name: req.body.name,
      username: req.body.username,
      email: req.body.email
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render('register', {
        title: 'User Registration',
        userDetails
      });
    } else {
      const password = req.body.password;
      const passwordConfirm = req.body.password_confirm;

      console.log('SUCCESS');
    }

  });

module.exports = router;
