const express = require('express');
const router = express.Router();

const books = require('../models/books');

router.get('/', async function (req, res, next) {
  try {
    const products = await books.getAllBooks();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/', function (req, res, next) {
  books.insertBook(req.body);
  res.json(req.body);
});

router.put('/:id', function (req, res, next) {
  const id = req.params.id;
  books.modifyBook(id, req.body);
  res.json(req.body);
});

router.delete('/:id', function (req, res, next) {
  const id = req.params.id;
  books.removeBook(id);
  res.send();
});

module.exports = router;
