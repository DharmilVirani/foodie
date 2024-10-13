import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import InputField from '../InputField'
import { isUserLoggedIn } from '../../util'

const Navbar = () => {
    const location = useLocation() // Use useLocation to access the current route
    const route = location.pathname
    const noNavPage = ['/signup', '/login']

    const isLoggedIn = isUserLoggedIn()

    if (noNavPage.includes(route)) return null

    const title = 'foodie'

    return (
        <>
            <div className='navbar-container'>
                <div className='navbar-left'>
                    <NavLink to='/' className='navbar-title'>
                        {title}
                    </NavLink>
                    <InputField
                        className='searchBar'
                        placeholder='Search for Food, Cuisine and Restaurants.....'
                        style={{
                            width: 500,
                        }}
                        onSearch={(e) => console.log(e)}
                        type='search'
                    />
                </div>
                <div className='navbar-right'>
                    <div className='cart-icon'>
                        {isLoggedIn ? (
                            <NavLink to='/cart' className='cart-logo'>
                                CART
                            </NavLink>
                        ) : (
                            <NavLink to='/login' className='cart-logo'>
                                LOGIN
                            </NavLink>
                        )}
                        {isLoggedIn ? (
                            <NavLink to='/profile/orders' className='cart-logo'>
                                PROFILE
                            </NavLink>
                        ) : (
                            <NavLink to='/signup' className='cart-logo'>
                                SIGNUP
                            </NavLink>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
