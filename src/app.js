const express = require('express')
const users = require('./routes/users');
const products = require('./routes/products');
const categories = require('./routes/categories');
const serie = require('./routes/serie');
const file = require('./routes/file');
const contact = require('./routes/contact');
const photo = require('./routes/photo');

const cors = require('cors');
const bodyParser = require('body-parser');
const auth = require('./middleware/auth');
const path = require('path');

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
app.use('/products', products);
app.use('/categories', categories);
app.use('/serie', serie);
app.use('/file', file);
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));
app.use('/contact', contact);
app.use('/photo', photo);

app.listen(process.env.PORT || 3000, () => console.log(`Server running`));