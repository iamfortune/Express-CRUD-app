"use strict";

var dotenv = require('dotenv');

dotenv.config({
  path: './config.env'
});

var app = require('./app'); // STARTING SERVER 


var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("app running on port ".concat(port));
});