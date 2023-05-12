const express = require('express');
const bodyParser = require('body-parser');

const formRoutes = require('./routes/form');

const app = express();

app.use(bodyParser.json());
app.use('/form', formRoutes);

app.listen(8080);