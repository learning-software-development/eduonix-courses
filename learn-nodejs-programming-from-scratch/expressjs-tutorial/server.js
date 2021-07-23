const express = require('express');
const ejs = require('ejs');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (request, response) => {
  response.render('index', {title: 'Learning ExpressJS with EJS'});
});

app.get('/*', (request, response) => {
  response.status(404).render('error');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
