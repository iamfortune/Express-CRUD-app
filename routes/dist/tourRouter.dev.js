"use strict";

var express = require('express');

var router = express.Router();
var tours = JSON.parse(fs.readFileSync("".concat(__dirname, "/dev-data/data/tours-simple.json"))); // ROUTE HANDLERS

var getAllTours = function getAllTours(req, res) {
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

var getTour = function getTour(req, res) {
  console.log(req.params);
  var id = req.params.id * 1; // we converted the id string to number

  var tour = tours.find(function (el) {
    return el.id === id;
  });
  /** here we loop through the tours and try to find the element whose id matches the one we are looking for */
  // if (id > tours.length)

  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Tour Not Found'
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour: tour
    }
  });
};

var createTour = function createTour(req, res) {
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

var updateTour = function updateTour(req, res) {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Tour Not Found'
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour ....>'
    }
  });
};

var deleteTour = function deleteTour(req, res) {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Tour Not Found'
    });
  }

  res.status(204).json({
    status: 'success',
    data: null
  });
};

router.route('/').get(getAllTours).post(createTour);
router.route('/:id').get(getTour).patch(updateTour)["delete"](deleteTour);
module.exports = router; // here we are doing this cos we are just exporting one thing, the router