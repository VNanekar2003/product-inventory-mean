const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/inventorydb')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/products', require('./routes/productRoutes'));

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
