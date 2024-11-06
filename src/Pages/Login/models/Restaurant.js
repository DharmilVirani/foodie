const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
    customId: { type: String, required: true },
    cityId: { type: String, required: true },
    name: { type: String, required: true },
    uniqueId: { type: Number, unique: true, required: true }, // Handle manually
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = Restaurant
