const express = require('express')
const products = require('./routes/products');
const users = require('./routes/users');
const cors = require('cors');
const bodyParser = require('body-parser');

const auth = require('./middleware/auth');

require('dotenv').config();
require('./config/database');

const app = express();

app.use(cors());
app.use( bodyParser.json({limit: '50mb'}) );
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit:50000
}));

// public route
app.use('/users', users);
app.use('/products', auth, products);
app.use('/onlyreading', products);

app.listen(process.env.PORT || 3000, () => console.log(`Server running`));