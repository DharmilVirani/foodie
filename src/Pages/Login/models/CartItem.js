const mongoose = require('mongoose')

const CartItemSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.Number,
        ref: 'User',
        required: true,
    },
    foodId: {
        type: mongoose.Schema.Types.String,
        ref: 'FoodDish',
        required: true,
    },
    restaurantId: {
        type: mongoose.Schema.Types.String,
        ref: 'Restaurant',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        default: 1,
        min: 1,
    },
    price: {
        type: Number,
        required: true,
    },
    foodName: {
        type: String,
        required: true,
    },
    foodRestaurant: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    uniqueId: {
        type: Number,
        required: true,
        unique: true, // Ensure uniqueId is unique
    },
})

module.exports = mongoose.model('CartItem', CartItemSchema)
