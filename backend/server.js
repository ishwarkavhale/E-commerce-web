const express = require('express');
const Data = require('./Data.js');

const app = express();

app.get('/', (req, res) => {
  res.send(Data.products);
});

app.listen(5000, () => {
  console.log('Server started at http://localhost:5000');
});
