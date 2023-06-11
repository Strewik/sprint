const asynchandler = require('express-async-handler')

// @desc    Get restaurant
// @route   GET /api/getRestaurants
// @access  Private
const getRestaurants = asynchandler(async (req, res) => {
    res.status(200).json({ "message": "Hello"})
})

// @desc    add restaurant
// @route   POST /api/createRestaurants
// @access  Private
const createRestaurant = asynchandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({ "message": "create restaurant"})
})

// @desc    update restaurant
// @route   PUT /api/updateRestaurants
// @access  Private
const updateRestaurant = asynchandler(async (req, res) => {
    res.status(200).json({ "message": `Update restaurant ${req.params.id}`})
})

// @desc    Delete restaurant
// @route   DELETE /api/deleteRestaurants
// @access  Private
const deleteRestaurant = asynchandler(async (req, res) => {
    res.status(200).json({ "message": `Delete restaurant ${req.params.id}`})
})





module.exports = {
    getRestaurants,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant
}