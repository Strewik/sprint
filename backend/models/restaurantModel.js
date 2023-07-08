const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
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
