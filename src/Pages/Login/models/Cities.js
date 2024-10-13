const mongoose = require('mongoose')

// models/City.js
const citySchema = new mongoose.Schema({
    id: Number,
    name: String,
})

const City = mongoose.model('cities', citySchema)
module.exports = City
