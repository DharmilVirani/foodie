import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Cart = ({ updateQuantity }) => {
    const [cartItems, setCartItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const userId = localStorage.getItem('uniqueId')

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await fetch(`http://localhost:5000/cart/${userId}`)
                const data = await response.json()
                if (data.success) {
                    setCartItems(data.cartItems)
                } else {
                    setError(data.message)
                }
            } catch (error) {
                console.error('Error fetching cart items:', error)
                setError('Failed to fetch cart items')
            } finally {
                setLoading(false)
            }
        }

        fetchCartItems()
    }, [userId])

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

    const handleClearCart = () => {
        const confirmation = window.confirm('Are you sure you want to clear the cart?')
        if (confirmation) {
            clearCart(userId)
        }
    }

    async function removeFromCart(uniqueId, userId) {
        window.location.reload()
        try {
            const response = await fetch(`http://localhost:5000/cart/delete/${userId}/${uniqueId}`, {
                method: 'DELETE',
            })

            const result = await response.json()

            if (result.success) {
                console.log('Item deleted successfully')

                // Remove the item from the state (cartItems) without reloading the page
                setCartItems((prevItems) => prevItems.filter((item) => item.uniqueId !== uniqueId))
            } else {
                console.error(result.message)
            }
        } catch (error) {
            console.error('Error deleting item:', error)
        }
    }

    async function clearCart(userId) {
        try {
            const response = await fetch(`http://localhost:5000/cart/clear/${userId}`, {
                method: 'DELETE',
            })

            const result = await response.json()

            if (result.success) {
                console.log('All items cleared successfully')
                setCartItems([])
            } else {
                console.error(result.message)
            }
        } catch (error) {
            console.error('Error clearing cart:', error)
        }
    }

    const handleQuantityChange = async (uniqueId, newQuantity) => {
        if (newQuantity <= 0 || newQuantity > 20) return // Prevent invalid quantities

        try {
            const response = await fetch(`http://localhost:5000/cart/update/${uniqueId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ quantity: newQuantity }),
            })

            const result = await response.json()

            if (result.success) {
                // Update the cart state without reloading the page
                setCartItems((prevItems) =>
                    prevItems.map((item) => (item.uniqueId === uniqueId ? { ...item, quantity: newQuantity } : item))
                )
            } else {
                console.error(result.message)
            }
        } catch (error) {
            console.error('Error updating item quantity:', error)
        }
    }

    const decreaseQuantity = (uniqueId, currentQuantity) => {
        if (currentQuantity > 1) {
            handleQuantityChange(uniqueId, currentQuantity - 1)
        }
    }

    const increaseQuantity = (uniqueId, currentQuantity) => {
        if (currentQuantity < 20) {
            handleQuantityChange(uniqueId, currentQuantity + 1)
        }
    }

    if (loading) return <div className='empty-cart-container'>Loading cart items...</div>

    return (
        <div className='cart-container'>
            {cartItems.length > 0 ? (
                <>
                    <div className='cart-items'>
                        {cartItems.map((item) => (
                            <div key={item.customId}>
                                <div className='line'></div>
                                <div className='row'>
                                    <img className='cart-food-img' src={item.url} alt={item.foodName} />
                                    <div className='cart-food-name'>{item.foodName}</div>
                                    <div className='cart-restaurant-name'>{item.foodRestaurant}</div>
                                    <div className='food-price'>₹{item.price.toFixed(2)}</div>
                                    <div className='quantity-control'>
                                        <button
                                            className='quantity-btn'
                                            onClick={() => decreaseQuantity(item.uniqueId, item.quantity)}
                                            disabled={item.quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <span className='quantity'>{item.quantity}</span>
                                        <button
                                            className='quantity-btn'
                                            onClick={() => increaseQuantity(item.uniqueId, item.quantity)}
                                            disabled={item.quantity >= 20}
                                        >
                                            +
                                        </button>
                                    </div>

                                    <div
                                        className='delete-icon'
                                        onClick={() => removeFromCart(item.uniqueId, item.userId)}
                                    >
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
                            <button
                                className='place-order button btn'
                                onClick={(e) => {
                                    e.target.blur()
                                }}
                            >
                                Place Order
                            </button>
                            <button className='clr-cart button btn' onClick={handleClearCart}>
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
