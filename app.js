const express = require('express');
const bodyParser = require('body-parser');

const formRoutes = require('./routes/form');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use('/form', formRoutes);

app.listen(3000);