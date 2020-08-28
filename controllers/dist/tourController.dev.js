"use strict";

var fs = require('fs');

var tours = JSON.parse(fs.readFileSync("".concat(__dirname, "/../dev-data/data/tours-simple.json")));

exports.checkID = function (req, res, next, val) {
  console.log("Tour id is ".concat(val));

  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID'
    });
  }

  next();
};

exports.checkBody = function (req, res, next) {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missind credentials, please fill in details'
    });
  }

  next();
}; // ROUTE HANDLERS


exports.getAllTours = function (req, res) {
  console.log(req.requestTime);
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: tours.length,
    data: {
      tours: tours
    }
  });
};

exports.getTour = function (req, res) {
  console.log(req.params);
  var id = req.params.id * 1; // we converted the id string to number

  var tour = tours.find(function (el) {
    return el.id === id;
  });
  /** here we loop through the tours and try to find the element whose id matches the one we are looking for */

  res.status(200).json({
    status: 'success',
    data: {
      tour: tour
    }
  });
};

exports.createTour = function (req, res) {
  var newId = tours[tours.length - 1].id + 1;
  var newTour = Object.assign({
    id: newId
  }, req.body);
  tours.push(newTour);
  fs.writeFile("".concat(__dirname, "/dev-data/data/tours-simple.json"), JSON.stringify(tours), function (err) {
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour
      }
    });
  });
};

exports.updateTour = function (req, res) {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour ....>'
    }
  });
};

exports.deleteTour = function (req, res) {
  res.status(204).json({
    status: 'success',
    data: null
  });
};