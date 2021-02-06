const express = require('express');
const data = require('./data');

const app = express();

try {
  app.get('/api/products', (req, res) => {
    res.send(data.products);
  });
} catch (error) {
  console.error(error);
}

app.listen(5000, () => {
  console.log('Server started at http://localhost:5000');
});
