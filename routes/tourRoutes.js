const express = require('express');
const tourController = require('./../controllers/tourController');

const router = express.Router();

// router.param(`id`, tourController.checkID);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;

// here we are doing this cos we are just exporting one thing, the router
