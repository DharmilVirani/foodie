import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import configureStore from './store/store'
import Signup from './Pages/Login/Signup'
import Home from './Pages/Home/Home'
import NotFound from './Pages/NotFound'
import Navbar from './Components/Navbar/Navbar'
import Login from './Pages/Login/Login'
import Profile from './Pages/Usermenu/Profile/Profile'
import Cart from './Pages/Usermenu/Profile/Cart'

import './Pages/Login/Login.css'
import './Components/Navbar/Navbar.css'
import './Pages/Home/Home.css'
import './Pages/Usermenu/Profile/Profile.css'
import './Pages/Usermenu/Profile/Order.css'
import './Pages/Usermenu/Profile/Sidebar.css'
import './Pages/Usermenu/Name.css'
import './Pages/Usermenu/Profile/Cart.css'

const store = configureStore()

function App() {
    const [cartItems, setCartItems] = useState([])

    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item])
        alert('Item Added to Cart Successfully!!')
    }

    const removeFromCart = (itemToRemove) => {
        setCartItems((prevItems) => prevItems.filter((item) => item !== itemToRemove))
    }

    return (
        <Provider store={store}>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home addToCart={addToCart} />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/profile/:id' element={<Profile />} />
                <Route path='/cart' element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Provider>
    )
}

export default App
