const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/add', (req, res) => {
  res.send('New record added.');
});

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
app.listen(HTTP_PORT, () => {
  console.log(`Server is listening at port ${HTTP_PORT}`);
});
