const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
    name: { type: String, required: true },
    customId: { type: Number, unique: true, index: true }, // Handle manually
})

const City = mongoose.model('City', citySchema)

module.exports = City
