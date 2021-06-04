const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/hello', (request, response) => {
  response.send('Hello world!');
});

app.get('/about', (request, response) => {
  response.redirect('/about.html');
});

app.get('/users', (request, response) => {
  const users = [
    {
      first_name: "John",
      last_name: "Doe",
      age: 34,
      gender: "male"
    },
    {
      first_name: "Tom",
      last_name: "Jackson",
      age: 23,
      gender: "male"
    },
    {
      first_name: "Tracy",
      last_name: "Smith",
      age: 38,
      gender: "female"
    }
  ];
  response.json(users);
});

app.get('/download', (request, response) => {
  response.download(path.join(__dirname, '/downloads/file-example_PDF_1MB.pdf'));
});

app.get('/user/:name', (request, response) => {
  let name = request.params.name;
  response.send(`<h1>Hello ${name}!</h1>`);
});

app.post('/subscribe', (request, response) => {
  let name = request.body.name;
  let email = request.body.email;

  console.log(`${name} has subscribe with ${email}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
