import React from 'react'
import Sidebar from './Sidebar'
import Name from '../Name'
import Order from './Order'
import Favourites from './Favourites'
import Payments from './Payments'
import Addresses from './Addresses'
import Settings from './Settings'

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
                        <Addresses />
                    ) : selected === 'settings' ? (
                        <Settings />
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Profile
