const express = require('express');
const consign = require('consign');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/view');

consign()
    .include('./app/routes')
    .then('config/dbConfig.js')
    .into(app);

module.export = app;