import React, { useState, useEffect } from 'react'
import { Provider } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import configureStore from './store/store'
import Signup from './Pages/Login/Signup'
import Home from './Pages/Home/Home'
import NotFound from './Pages/Usermenu/NotFound'
import Navbar from './Components/Navbar/Navbar'
import Login from './Pages/Login/Login'
import Profile from './Pages/Usermenu/Profile/Profile'
import Cart from './Pages/Usermenu/Profile/Cart'
import AddAddress from './Pages/Usermenu/Profile/AddAddress'

import './Pages/Login/Login.css'
import './Components/Navbar/Navbar.css'
import './Pages/Home/Home.css'
import './Pages/Home/Button.css'
import './Pages/Usermenu/Profile/Profile.css'
import './Pages/Usermenu/Profile/Order.css'
import './Pages/Usermenu/Name.css'
import './Pages/Usermenu/Profile/Cart.css'
import './Pages/Usermenu/Profile/Address.css'

const store = configureStore()

function App() {
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        const savedCartItems = localStorage.getItem('cartItems')
        if (savedCartItems) {
            setCartItems(JSON.parse(savedCartItems))
        }
    }, [])

    useEffect(() => {
        if (cartItems.length > 0) {
            localStorage.setItem('cartItems', JSON.stringify(cartItems))
        }
    }, [cartItems])

    const addToCart = (item, event) => {
        if (event) {
            event.preventDefault()
        }

        // Create a new item with a customId based on the current timestamp and an initial quantity of 1
        const newItem = { ...item, customId: Date.now(), quantity: 1 }

        // Check for existing item based on uniqueId or customId instead of foodId
        const existingItem = cartItems.find((cartItem) => cartItem.customId === newItem.customId)

        let updatedCartItems
        if (existingItem) {
            // If an item with the same uniqueId/customId exists, do nothing or alert the user
            alert('This item is already in the cart.')
        } else {
            // If the item is new (not in the cart), add it to the cart
            updatedCartItems = [...cartItems, newItem]
            setCartItems(updatedCartItems)
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))

            alert('Item Added to Cart Successfully!!')
        }
    }

    const removeFromCart = (itemToRemove) => {
        const updatedCart = cartItems.filter((item) => item.customId !== itemToRemove.customId)
        setCartItems(updatedCart)
        localStorage.setItem('cartItems', JSON.stringify(updatedCart))
    }

    const clearCart = () => {
        setCartItems([])
        localStorage.removeItem('cartItems')
    }

    const updateQuantity = (customId, newQuantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) => (item.customId === customId ? { ...item, quantity: newQuantity } : item))
        )
    }

    const HomeWrapper = () => <Home addToCart={addToCart} />
    const CartWrapper = () => (
        <Cart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
            clearCart={clearCart}
        />
    )

    return (
        <Provider store={store}>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomeWrapper />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/profile/:id' element={<Profile />} />
                <Route path='/cart' element={<CartWrapper />} />
                <Route path='/addNewAddress' element={<AddAddress />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Provider>
    )
}

export default App
