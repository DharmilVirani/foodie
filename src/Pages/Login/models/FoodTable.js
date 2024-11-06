const mongoose = require('mongoose')

const foodTableSchema = new mongoose.Schema({
    foodId: { type: String, required: true },
    restaurantId: { type: String, required: true },
    ratings: { type: Number, required: true },
    price: { type: Number, required: true },
    url: { type: String, required: true },
    uniqueId: { type: Number, unique: true, required: true }, // Handle manually
})

const FoodTable = mongoose.model('FoodTable', foodTableSchema)

module.exports = FoodTable
