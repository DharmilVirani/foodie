const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
    customId: String,
    cityId: String,
    name: String,
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)
module.exports = Restaurant
