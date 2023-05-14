const express = require('express');
const bodyParser = require('body-parser');

const formRoutes = require('./routes/form');
const mongoConnect = require('./util/database').mongoConnect;
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/form', formRoutes);

mongoConnect(() => {
    app.listen(4200);
});