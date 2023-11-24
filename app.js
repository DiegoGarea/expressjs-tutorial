const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');

// res => middleware => res
app.use([logger, authorize]);

app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About');
});
app.get('/api/products', (req, res) => {
  res.send('products');
});
app.get('/api/items', (req, res) => {
  console.log(req.user);
  res.send('items');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000...');
});
