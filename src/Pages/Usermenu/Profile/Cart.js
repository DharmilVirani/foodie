import React from 'react'
import { Link } from 'react-router-dom'

const Cart = ({ cartItems, removeFromCart, updateQuantity, clearCart }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

    const handleClearCart = () => {
        const confirmation = window.confirm('Are you sure you want to clear the cart?')
        if (confirmation) {
            clearCart()
        }
    }
    return (
        <div className='cart-container'>
            {cartItems.length > 0 ? (
                <>
                    <div className='cart-items'>
                        {cartItems.map((item, index) => (
                            <div key={item.customId}>
                                {' '}
                                <div className='line'></div>
                                <div className='row'>
                                    <img className='cart-food-img' src={item.url} alt={item.foodName} />
                                    <div className='cart-food-name'>{item.foodName}</div>
                                    <div className='cart-restaurant-name'>{item.foodRestaurant}</div>
                                    <div className='food-price'>₹{item.price.toFixed(2)}</div>
                                    <div className='quantity-control'>
                                        <button
                                            className='quantity-btn'
                                            onClick={() => updateQuantity(item.customId, item.quantity - 1)}
                                            disabled={item.quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <span className='quantity'>{item.quantity}</span>
                                        <button
                                            className='quantity-btn'
                                            onClick={() => updateQuantity(item.customId, item.quantity + 1)}
                                            disabled={item.quantity >= 10}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className='delete-icon' onClick={() => removeFromCart(item)}>
                                        <svg viewBox='0 0 24 24' fill='currentColor'>
                                            <path d='M4 8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8ZM6 10V20H18V10H6ZM9 12H11V18H9V12ZM13 12H15V18H13V12ZM7 5V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V5H22V7H2V5H7ZM9 4V5H15V4H9Z'></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className='line'></div>
                        <div className='total-quantity'>
                            <div className='cart-total-quantity'>
                                Total Items : <span>{totalItems}</span>
                            </div>
                            <div className='cart-total-price'>
                                Total Price : <span>₹{totalPrice.toFixed(2)}</span>{' '}
                            </div>
                        </div>
                        <div className='line'></div>
                        <div className='lower-cart'>
                            <button className='place-order button'>Place Order</button>
                            <button className='clr-cart button' onClick={handleClearCart}>
                                Clear Cart
                            </button>
                        </div>
                    </div>
                </>
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
