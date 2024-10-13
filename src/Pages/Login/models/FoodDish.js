// models/FoodDish.js
const mongoose = require('mongoose')

const foodDishSchema = new mongoose.Schema({
    id: Number,
    name: String,
    category: String,
})

const FoodDish = mongoose.model('fooddishes', foodDishSchema)
module.exports = FoodDish
