const mongoose = require('mongoose')

const foodTableSchema = new mongoose.Schema({
    foodId: String,
    restaurantId: String,
    ratings: Number,
    price: Number,
    url: String,
})

const FoodTable = mongoose.model('FoodTable', foodTableSchema)
module.exports = FoodTable
