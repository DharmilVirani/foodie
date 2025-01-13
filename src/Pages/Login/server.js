const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const User = require('./models/User')
const FoodDish = require('./models/FoodDish')
const FoodTable = require('./models/FoodTable')
const Restaurant = require('./models/Restaurant')
const Cities = require('./models/Cities')
const CartItem = require('./models/CartItem')
const Address = require('./models/AddressSchema')

const app = express()
const PORT = 5000

app.use(cors())
app.use(bodyParser.json())

mongoose
    .connect('mongodb://localhost:27017/foodie')
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.error('MongoDB connection error:', error))

app.post('/existing', async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await User.findOne({ username, password })
        if (user) {
            res.json({ success: true, message: 'Login successful', uniqueId: user.uniqueId })
        } else {
            res.status(401).json({ success: false, message: 'Invalid credentials' })
        }
    } catch (error) {
        console.error('Login error:', error)
        res.status(500).json({ success: false, message: 'Server error' })
    }
})

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
            if (existingUser.mobile === mobile) {
                errorMessage.push('Mobile already in use.')
            }

            return res.status(400).json({ success: false, message: errorMessage.join(' ') })
        }

        const lastUser = await User.findOne().sort({ uniqueId: -1 })

        const newUniqueId = lastUser ? lastUser.uniqueId + 1 : 1

        const user = new User({
            username,
            password,
            email,
            mobile,
            uniqueId: newUniqueId,
        })

        await user.save()

        res.status(201).json({ success: true, message: 'User registered successfully', uniqueId: user.uniqueId })
    } catch (error) {
        console.error('Error during signup:', error)
        res.status(500).json({ success: false, message: 'Server error' })
    }
})

app.get('/users', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        console.error('Get users error:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
})

app.get('/user/:username', async (req, res) => {
    const { username } = req.params

    try {
        const user = await User.findOne({ username })
        if (user) {
            res.json({
                success: true,
                uniqueId: user.uniqueId,
                email: user.email,
                mobile: user.mobile,
            })
        } else {
            res.status(404).json({ success: false, message: 'User not found' })
        }
    } catch (error) {
        console.error('Fetch user error:', error)
        res.status(500).json({ success: false, message: 'Server error' })
    }
})

app.get('/api/fooddishes', async (req, res) => {
    try {
        const foodDishes = await FoodDish.find()
        res.json(foodDishes)
    } catch (error) {
        console.error('Error fetching food dishes:', error)
        res.status(500).json({ message: 'Server error' })
    }
})

app.get('/api/foodtables', async (req, res) => {
    try {
        const foodTables = await FoodTable.find()
        res.json(foodTables)
    } catch (error) {
        console.error('Error fetching food tables:', error)
        res.status(500).json({ message: 'Server error' })
    }
})

app.get('/api/restaurants', async (req, res) => {
    try {
        const restaurants = await Restaurant.find()
        res.json(restaurants)
    } catch (error) {
        console.error('Error fetching restaurants:', error)
        res.status(500).json({ message: 'Server error' })
    }
})

app.get('/api/cities', async (req, res) => {
    try {
        const cities = await Cities.find()
        res.json(cities)
    } catch (error) {
        console.error('Error fetching cities:', error)
        res.status(500).json({ message: 'Server error' })
    }
})

app.post('/cart/add', async (req, res) => {
    const { userId, foodId, restaurantId, quantity, price, foodName, foodRestaurant, url } = req.body

    try {
        const existingItem = await CartItem.findOne({ userId, foodId, restaurantId })

        if (existingItem) {
            existingItem.quantity += quantity
            await existingItem.save()

            return res.status(200).json({
                success: true,
                message: 'Item quantity updated in cart',
                cartItem: existingItem,
            })
        }

        const lastItem = await CartItem.findOne().sort({ uniqueId: -1 })
        const newUniqueId = lastItem ? lastItem.uniqueId + 1 : 1

        const newCartItem = new CartItem({
            userId,
            foodId,
            restaurantId,
            quantity,
            price,
            foodName,
            foodRestaurant,
            url,
            uniqueId: newUniqueId,
        })

        await newCartItem.save()

        res.status(201).json({
            success: true,
            message: 'Item added to cart',
            cartItem: newCartItem,
        })
    } catch (error) {
        console.error('Error adding item to cart:', error)
        res.status(500).json({ success: false, message: 'Server error' })
    }
})

app.get('/cart/:userId', async (req, res) => {
    const { userId } = req.params

    try {
        const cartItems = await CartItem.find({ userId })

        if (cartItems.length > 0) {
            res.json({ success: true, cartItems })
        } else {
            res.json({ success: false, message: 'No items found in cart' })
        }
    } catch (error) {
        console.error('Error fetching cart items:', error)
        res.status(500).json({ success: false, message: 'Server error' })
    }
})

app.delete('/cart/delete/:userId/:uniqueId', async (req, res) => {
    const { userId, uniqueId } = req.params

    try {
        const deletedItem = await CartItem.findOneAndDelete({ userId, uniqueId })

        if (!deletedItem) {
            return res.status(404).json({ success: false, message: 'Cart item not found' })
        }

        await CartItem.updateMany({ uniqueId: { $gt: uniqueId } }, { $inc: { uniqueId: -1 } })

        res.status(200).json({
            success: true,
            message: 'Cart item deleted and global unique IDs updated',
        })
    } catch (error) {
        console.error('Error deleting cart item:', error)
        res.status(500).json({ success: false, message: 'Server error' })
    }
})

app.delete('/cart/clear/:userId', async (req, res) => {
    const { userId } = req.params

    try {
        const deletedItems = await CartItem.deleteMany({ userId })

        if (deletedItems.deletedCount > 0) {
            res.status(200).json({
                success: true,
                message: 'All cart items removed successfully. Cart is now empty.',
            })
        } else {
            res.status(404).json({
                success: false,
                message: 'No items found in cart',
            })
        }
    } catch (error) {
        console.error('Error clearing cart:', error)
        res.status(500).json({ success: false, message: 'Server error' })
    }
})

app.put('/cart/update/:uniqueId', async (req, res) => {
    const { uniqueId } = req.params
    const { quantity } = req.body

    try {
        if (isNaN(uniqueId) || isNaN(quantity) || quantity <= 0) {
            return res.status(400).json({ success: false, message: 'Invalid quantity or uniqueId' })
        }

        const updatedItem = await CartItem.findOneAndUpdate({ uniqueId }, { $set: { quantity } }, { new: true })

        if (!updatedItem) {
            return res.status(404).json({ success: false, message: 'Cart item not found' })
        }

        res.status(200).json({ success: true, message: 'Cart item updated successfully', item: updatedItem })
    } catch (error) {
        console.error('Error updating cart item:', error)
        res.status(500).json({ success: false, message: 'Server error' })
    }
})

app.get('/get-addresses', async (req, res) => {
    try {
        const { userId } = req.query // Use query parameter for userId

        if (!userId) {
            return res.status(400).json({ error: 'User ID is required' })
        }

        // Fetch only addresses that belong to the specified user
        const addresses = await Address.find({ userId })

        res.status(200).json({ addresses })
    } catch (error) {
        console.error('Error fetching addresses:', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

app.post('/add-address', async (req, res) => {
    try {
        const { userId, addressType, addressName, address, city, pincode } = req.body

        if (!userId || !addressType || !addressName || !address || !city || !pincode) {
            return res.status(400).json({ error: 'All fields are required' })
        }

        // Find the last address for the user and calculate uniqueId
        const lastAddress = await Address.findOne({ userId }).sort({ uniqueId: -1 })
        const uniqueId = lastAddress ? lastAddress.uniqueId + 1 : 1

        const newAddress = new Address({
            userId,
            addressType,
            addressName,
            address,
            city,
            uniqueId,
            pincode,
        })

        await newAddress.save()

        res.status(201).json({ message: 'Address added successfully', address: newAddress })
    } catch (error) {
        console.error('Error adding address:', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

app.delete('/delete-address', async (req, res) => {
    try {
        const { userId, uniqueId } = req.body

        if (!userId || !uniqueId) {
            return res.status(400).json({ error: 'User ID and Unique ID are required' })
        }

        // Find the address by userId and uniqueId
        const addressToDelete = await Address.findOne({ userId, uniqueId })

        if (!addressToDelete) {
            return res.status(404).json({ error: 'Address not found for this user' })
        }

        await Address.findByIdAndDelete(addressToDelete._id)

        // Optionally, update the uniqueIds for the remaining addresses
        await Address.updateMany({ userId, uniqueId: { $gt: uniqueId } }, { $inc: { uniqueId: -1 } })

        res.status(200).json({ message: 'Address deleted successfully' })
    } catch (error) {
        console.error('Error deleting address:', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

app.put('/update-address', async (req, res) => {
    try {
        const { userId, uniqueId, addressType, addressName, address, city, pincode } = req.body

        // Check if all required fields are provided
        if (!userId || !uniqueId || !addressType || !addressName || !address || !city || !pincode) {
            return res.status(400).json({ error: 'All fields are required' })
        }

        const addressToUpdate = await Address.findOne({ userId, uniqueId })

        if (!addressToUpdate) {
            return res.status(404).json({ error: 'Address not found' })
        }

        addressToUpdate.addressType = addressType
        addressToUpdate.addressName = addressName
        addressToUpdate.address = address
        addressToUpdate.city = city
        addressToUpdate.pincode = pincode

        await addressToUpdate.save()
        res.status(200).json({ message: 'Address updated successfully', address: addressToUpdate })
    } catch (error) {
        console.error('Error updating address:', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
