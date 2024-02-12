import React from 'react'
import Sidebar from './sidebar components/Sidebar'
import Name from './Name'

const Profile = () => {
    return (
        <div className='profile-container'>
            <Name />
            <div className='profile-body'>
                <Sidebar />
                <div className='main'>
                    <div className='main-title'>Past Orders</div>
                    <div className='order-container'>
                        <div className='order-name'>
                            <img
                                src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_200,c_fill/h3hpzxhyz2onv5eyt2cf'
                                alt='Pizza'
                                className='food-img'
                            />
                            <div className='food-name'>
                                <div>
                                    <b>La Pino'z Pizza</b>
                                </div>
                                <div>Bedeshwar</div>
                                <div>ORDER #165075706908319 | Wed, Jan 24, 2024, 07:51 PM</div>
                            </div>
                            <div className='delivery-date'>Delivered on Wed, Jan 24, 2024, 08:15 PM</div>
                        </div>
                        <div className='order-details-container'>
                            <div className='order-details'>
                                <div className='order-detail'>
                                    Cheesy Garlic Bread x 2, Burn To Hell Pizza x 1, Cheezy-7 Pizza x 1
                                </div>
                                <button className='order-btn'>REORDER</button>
                                <button className='order-btn'>HELP</button>
                            </div>
                            <div className='total-paid'>Total Paid: &#x20B9;1757</div>
                        </div>
                    </div>
                    <div className='order-container'>
                        <div className='order-name'>
                            <img
                                src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_200,c_fill/h3hpzxhyz2onv5eyt2cf'
                                alt='Pizza'
                                className='food-img'
                            />
                            <div className='food-name'>
                                <div>
                                    <b>La Pino'z Pizza</b>
                                </div>
                                <div>Bedeshwar</div>
                                <div>ORDER #165075706908319 | Wed, Jan 24, 2024, 07:51 PM</div>
                            </div>
                            <div className='delivery-date'>Delivered on Wed, Jan 24, 2024, 08:15 PM</div>
                        </div>
                        <div className='order-details-container'>
                            <div className='order-details'>
                                <div className='order-detail'>
                                    Cheesy Garlic Bread x 2, Burn To Hell Pizza x 1, Cheezy-7 Pizza x 1
                                </div>
                                <button className='order-btn'>REORDER</button>
                                <button className='order-btn'>HELP</button>
                            </div>
                            <div className='total-paid'>Total Paid: &#x20B9;1757</div>
                        </div>
                    </div>
                    <button className='more-orders'>SHOW ME MORE ORDERS</button>
                </div>
            </div>
        </div>
    )
}

export default Profile
