const mongoose = require('mongoose')

// models/Restaurant.js
const restaurantSchema = new mongoose.Schema({
    id: Number,
    cityId: Number,
    name: String,
    foodId: Number,
})

const Restaurant = mongoose.model('restaurants', restaurantSchema)
module.exports = Restaurant
