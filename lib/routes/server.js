"use strict";

var express = require('express');

var routes = require('./');

var cors = require('cors');

var app = express();
var port = process.env.PORT || 8004; // parse application/json

app.use(express.json());
app.use(cors());
app.use('/', routes);
app.listen(port, function () {
  console.log('Server started on port: ' + port);
});
module.exports = app;