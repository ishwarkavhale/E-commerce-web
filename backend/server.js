const express = require('express');
const data = require('./data');
const connectDB = require('./db');
const userRoute = require('./routes/userRoute');
const bodyParser = require('body-parser');

connectDB();

const app = express();
app.use(bodyParser.json());

app.use('/api/users', userRoute);
try {
  app.get('/api/products', (req, res) => {
    res.send(data.products);
  });
} catch (error) {
  console.error(error);
}
app.get('/api/products/:id', (req, res) => {
  const productId = req.params.id;
  const product = data.products.find((x) => x._id === productId);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ msg: 'Product Not Found .' });
  }
});

app.listen(5000, () => {
  console.log('Server started at http://localhost:5000');
});
