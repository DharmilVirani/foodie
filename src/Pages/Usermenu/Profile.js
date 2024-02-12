import React from 'react'
import Sidebar from './Profile/Sidebar'
import Name from './Name'
import Order from './Profile/Order'
import Favourites from './Profile/Favourites'
import Payments from './Profile/Payments'
import Address from './Profile/Address'

const Profile = () => {
    const selected = window.location.pathname.split('/').slice(-1)[0]
    return (
        <div className='profile-container'>
            <Name />
            <div className='profile-body'>
                <Sidebar />
                <div className='main'>
                    {selected === 'orders' ? (
                        <Order />
                    ) : selected === 'favourites' ? (
                        <Favourites />
                    ) : selected === 'payments' ? (
                        <Payments />
                    ) : selected === 'addresses' ? (
                        <Address />
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Profile
