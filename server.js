const express = require('express');
const app = express();

// setup a 'route' to listen on the default url path
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//Create new record
app.get('/add', (req, res) => {
  res.send('New record added.');
});

//showing demo records
app.get('/demo', (req, res) => {
  res.json([
    {
      id: '001',
      name: 'Smith',
      email: 'smith@gmail.com',
    },
    {
      id: '002',
      name: 'Sam',
      email: 'sam@gmail.com',
    },
    {
      id: '003',
      name: 'lily',
      email: 'lily@gmail.com',
    },
  ]);
});

const HTTP_PORT = process.env.PORT || 8080;
// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);
