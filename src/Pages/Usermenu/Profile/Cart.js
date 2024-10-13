import React from 'react'
import { Link } from 'react-router-dom'

const Cart = ({ cartItems, removeFromCart }) => {
    return (
        <div className='cart-container'>
            {cartItems.length > 0 ? (
                <div className='cart-items'>
                    {cartItems.map((item, index) => (
                        <div key={index}>
                            <div className='line'></div>
                            <div className='row'>
                                <img className='food-img' src={item.url} alt={item.foodName} />
                                <div className='food-name'>{item.foodName}</div>
                                <div className='restaurant-name'>{item.foodRestaurant}</div>
                                <div className='food-price'>₹{item.price.toFixed(2)}</div>
                                <div></div>
                                <div className='delete-icon' onClick={() => removeFromCart(item)}>
                                    <svg viewBox='0 0 24 24' fill='currentColor'>
                                        <path d='M4 8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8ZM6 10V20H18V10H6ZM9 12H11V18H9V12ZM13 12H15V18H13V12ZM7 5V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V5H22V7H2V5H7ZM9 4V5H15V4H9Z'></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className='line'></div>
                    <div className='line'></div>
                </div>
            ) : (
                <div className='empty-cart-container'>
                    <div>No items in the cart</div>
                    <div>Add Items</div>
                    <div>
                        Scroll like a{' '}
                        <Link to='/' className='cart-foodie'>
                            <i>foodie</i>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cart
