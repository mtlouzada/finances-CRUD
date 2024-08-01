const express = require('express');
const consign = require('consign');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/view');

consign().include('./app/routes').into(app);

module.export = app;