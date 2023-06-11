const asynchandler = require("express-async-handler");
const Restaurants = require("../models/restaurantModel");

// @description    Get restaurant
// @route   GET /api/getRestaurants
// @access  Private
const getRestaurants = asynchandler(async (req, res) => {
  const rests = await Restaurants.find();

  res.status(200).json(rests);
});

// @desc    add restaurant
// @route   POST /api/createRestaurants
// @access  Private
const createRestaurant = asynchandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const rest = await Restaurants.create({
    name: req.body.name,
    location: req.body.location,
    openhours: req.body.openhours,
  });

  res.status(200).json(rest);
});

// @desc    update restaurant
// @route   PUT /api/updateRestaurants
// @access  Private
const updateRestaurant = asynchandler(async (req, res) => {
  const rest = await Restaurants.findById(req.params.id);
  if (!rest) {
    res.status(400);
    throw new Error("Restaurant not found");
  }
  const updatedRest = await Restaurants.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedRest);
});

// @desc    Delete restaurant
// @route   DELETE /api/deleteRestaurants
// @access  Private
const deleteRestaurant = asynchandler(async (req, res) => {
  const rest = await Restaurants.findById(req.params.id);
  if (!rest) {
    res.status(400);
    throw new Error("Restaurant not found");
  }
  
  await rest.deleteOne()

  res.status(200).json({id: req.params.id});
});

module.exports = {
  getRestaurants,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
};
