const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: Number, required: true, unique: true },
    uniqueId: { type: Number, unique: true, index: true }, // No autoincrement, handle manually
})

const User = mongoose.model('User', userSchema)
module.exports = User
