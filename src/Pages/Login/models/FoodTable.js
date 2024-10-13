const mongoose = require('mongoose')

// models/FoodTable.js
const foodTableSchema = new mongoose.Schema({
    foodId: Number,
    restaurantId: Number,
    ratings: Number,
    price: Number,
    url: String,
})

const FoodTable = mongoose.model('foodtables', foodTableSchema)
module.exports = FoodTable
