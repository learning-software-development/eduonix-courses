const express = require('express');
const path = require('path');

const app = express();
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));

app.get('/user/:name', (request, response) => {
  let name = request.params.name;
  response.send(`<h1>Hello ${name}!</h1>`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
