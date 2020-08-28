"use strict";

var express = require('express');

var morgan = require('morgan');

var tourRouter = require('./routes/tourRoutes');

var userRouter = require('./routes/userRoutes');

var app = express(); // MIDDLEWARES

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express["static"]("".concat(__dirname, "/public")));
app.use(function (req, res, next) {
  console.log('Hello World bruh');
  next();
});
app.use(function (req, res, next) {
  req.requestTime = new Date().toISOString();
  next();
}); // ROUTES

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
module.exports = app;