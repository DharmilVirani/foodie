const mongoose = require('mongoose')

const foodDishSchema = new mongoose.Schema({
    customId: { type: String, required: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    uniqueId: { type: Number, unique: true, required: true }, // Handle manually
})

const FoodDish = mongoose.model('FoodDish', foodDishSchema)

module.exports = FoodDish
