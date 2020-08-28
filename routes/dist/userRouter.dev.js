"use strict";

var express = require('express');

var router = express.Router();

var getAllUsers = function getAllUsers(req, res) {
  res.sendStatus(500).json({
    status: 'error',
    message: 'We are still working on this, please check back later'
  });
};

var getUser = function getUser(req, res) {
  res.sendStatus(500).json({
    status: 'error',
    message: 'We are still working on this, please check back later'
  });
};

var createUser = function createUser(req, res) {
  res.sendStatus(500).json({
    status: 'error',
    message: 'We are still working on this, please check back later'
  });
};

var updateUser = function updateUser(req, res) {
  res.sendStatus(500).json({
    status: 'error',
    message: 'We are still working on this, please check back later'
  });
};

var deleteUser = function deleteUser(req, res) {
  res.sendStatus(500).json({
    status: 'error',
    message: 'We are still working on this, please check back later'
  });
};

userRouter.route('/').get(getAllUsers).post(createUser);
userRouter.route('/:id').get(getUser).patch(updateUser)["delete"](deleteUser);
module.exports = router;