const mongoose = require('mongoose')

const foodDishSchema = new mongoose.Schema({
    customId: String,
    name: String,
    category: String,
})

const FoodDish = mongoose.model('FoodDish', foodDishSchema)
module.exports = FoodDish
