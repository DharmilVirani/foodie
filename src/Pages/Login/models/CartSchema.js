const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    items: [
        {
            foodId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'FoodTable',
                required: true,
            },
            imageUrl: {
                type: String,
                required: true,
            },
            foodCategory: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            restaurant: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Restaurant',
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
                default: 1,
            },
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const CartSchema = mongoose.model('Cart', cartSchema)
module.exports = CartSchema
