const express = require('express');
const router = express.Router();

const clients = require('../models/clients');

router.get('/', function (req, res, next) {
  res.json(clients.getAllClients());
});

router.post('/', function (req, res, next) {
  clients.insertClient(req.body);
  res.json(req.body);
});

router.put('/:id', function (req, res, next) {
  const id = req.params.id;
  clients.modifyClient(id, req.body);
  res.json(req.body);
});

router.delete('/:id', function (req, res, next) {
  const id = req.params.id;
  clients.removeClient(id);
  res.send();
});

module.exports = router;
