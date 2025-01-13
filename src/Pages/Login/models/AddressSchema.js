const { type } = require('@testing-library/user-event/dist/type')
const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
    userId: {
        type: Number,
        ref: 'User',
        required: true,
    },
    addressType: {
        type: String,
        enum: ['Home', 'Work'],
        required: true,
    },
    addressName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
        unique: true,
    },
    pincode: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    uniqueId: {
        type: Number,
        required: true,
        unique: true,
    },
})

const AddressSchema = mongoose.model('Address', addressSchema)
module.exports = AddressSchema
