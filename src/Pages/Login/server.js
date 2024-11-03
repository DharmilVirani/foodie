// server.js
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const User = require('./models/User')

const FoodDish = require('./models/FoodDish')
const FoodTable = require('./models/FoodTable')
const Restaurant = require('./models/Restaurant')
const Cities = require('./models/Cities')

const app = express()
const PORT = 5000

app.use(cors())
app.use(bodyParser.json())

// Connect to MongoDB
mongoose
    .connect('mongodb://localhost:27017/foodie')
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.error('MongoDB connection error:', error))
// Login endpoint
app.post('/existing', async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await User.findOne({ username, password })
        if (user) {
            res.json({ success: true, message: 'Login successful' })
        } else {
            res.status(401).json({ success: false, message: 'Invalid credentials' })
        }
    } catch (error) {
        console.error('Login error:', error)
        res.status(500).json({ success: false, message: 'Server error' })
    }
})

//Signup
app.post('/newuser', async (req, res) => {
    const { username, password, email, mobile } = req.body
    try {
        const existingUser = await User.findOne({ $or: [{ username }, { email }, { mobile }] })

        if (existingUser) {
            const errorMessage = []

            if (existingUser.username === username) {
                errorMessage.push('Username already in use.')
            }
            if (existingUser.email === email) {
                errorMessage.push('Email already in use.')
            }

            //todo: Message not visible
            if (existingUser.mobile === mobile) {
                errorMessage.push('Mobile already in use.')
            }

            return res.status(400).json({ success: false, message: errorMessage.join(' ') })
        }

        // Insert the received login data into the MongoDB database
        const user = new User({ username, password, email, mobile })
        await user.save()
        res.json({ success: true, message: 'Login data inserted successfully' })
    } catch (error) {
        console.error('Login error:', error)
        res.status(500).json({ success: false, message: 'Server error' })
    }
})

// Get all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        console.error('Get users error:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
})

//Remaining details fetch from username
app.get('/user/:username', async (req, res) => {
    const { username } = req.params
    try {
        const user = await User.findOne({ username })
        if (user) {
            res.json({ success: true, email: user.email, mobile: user.mobile })
        } else {
            res.status(404).json({ success: false, message: 'User not found' })
        }
    } catch (error) {
        console.error('Fetch user error:', error)
        res.status(500).json({ success: false, message: 'Server error' })
    }
})

// Fetch all food dishes
app.get('/api/fooddishes', async (req, res) => {
    try {
        const foodDishes = await FoodDish.find()
        res.json(foodDishes)
    } catch (error) {
        console.error('Error fetching food dishes:', error)
        res.status(500).json({ message: 'Server error' })
    }
})

// Fetch all food tables
app.get('/api/foodtables', async (req, res) => {
    try {
        const foodTables = await FoodTable.find()
        res.json(foodTables)
    } catch (error) {
        console.error('Error fetching food tables:', error)
        res.status(500).json({ message: 'Server error' })
    }
})

// Fetch all restaurants
app.get('/api/restaurants', async (req, res) => {
    try {
        const restaurants = await Restaurant.find()
        res.json(restaurants)
    } catch (error) {
        console.error('Error fetching restaurants:', error)
        res.status(500).json({ message: 'Server error' })
    }
})

// Fetch all cities
app.get('/api/cities', async (req, res) => {
    try {
        const cities = await Cities.find()
        res.json(cities)
    } catch (error) {
        console.error('Error fetching cities:', error)
        res.status(500).json({ message: 'Server error' })
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
