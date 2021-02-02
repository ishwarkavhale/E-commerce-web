const express = require('express');
const data = require('./data.js');

const app = express();

app.get('/', (req, res) => {
  res.send(data.text);
});

app.listen(5000, () => {
  console.log('Server started at http://localhost:5000');
});
