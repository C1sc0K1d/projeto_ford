var express = require('express');

let consign = require('consign');

let bodyParser = require('body-parser');

let expressValidator = require('express-validator');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .then('config/dbConnection.js')
    .into(app);

module.exports = app;
