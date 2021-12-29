const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const Users = require('../models/user');

passport.use(new LocalStrategy(
  function (username, password, done) {
    let user = Users.getUserByUsername({ username });
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    if (!Users.comparePassword(password, user.password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  }
));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  let user = Users.findUserById(id);
  done(null, user);
});

router.get('/', function (req, res, next) {
  res.render('login', { title: 'User Login', username: '' });
});

router.post('/',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  }));

module.exports = router;
