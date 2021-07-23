const express = require('express');
const stylus = require('stylus');
const path = require('path');
const nib = require('nib');

const app = express();
const port = 3000;

function compile(str, path) {
  return stylus(str)
  .set('filename', path)
  .use(nib());
}

app.set('view engine', 'jade');

app.use(stylus.middleware({
  src: path.join(__dirname, 'public'),
  compile
}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
  response.render('index', { title: 'Express' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
