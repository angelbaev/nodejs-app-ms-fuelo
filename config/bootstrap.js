var express = require('express');
var params = require('./params');

var app = express();
app.params = params;

module.exports = app;