const express = require('express');
const bodyParser = require('body-parser');

const formRoutes = require('./routes/form');
const mongoConnect = require('./util/database');
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/form', formRoutes);

mongoConnect(client => {
    console.log('CLIENT CONECT APP.JS', client);
    app.listen(8080);
});