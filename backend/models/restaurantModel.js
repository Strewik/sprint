const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
    name :{
        type: String,
        required: [true, "Please add a restaurant name"]
    },
    location:{
        type: String,
        required: true,
    },
    openhours:{
        type: String,
    },

},{
    timestamps: true,
})

module.exports = mongoose.model("Restaurants", restaurantSchema)
