const express = require('express');
const router = express.Router();
const {getRestaurants, createRestaurant, updateRestaurant, deleteRestaurant} = require('../controllers/restaurantControllers');


//routes
router.get('/api/restaurantList', getRestaurants )

router.post('/api/createRestaurant', createRestaurant)

router.put('/api/updateRestaurant/:id', updateRestaurant)

router.delete('/api/deleteRestaurant/:id', deleteRestaurant)


 

module.exports = router;
