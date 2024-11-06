import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Name from '../Name'
import Order from './Order'
import Payments from './Payments'
import Addresses from './Addresses'
import Settings from './Settings'
import './Sidebar.css'

const Profile = () => {
    const [selectedPage, setSelectedPage] = useState('orders') // Default to 'orders'

    return (
        <div className='profile-container'>
            <Name />
            <div className='profile-body'>
                <Sidebar setSelectedPage={setSelectedPage} selectedPage={selectedPage} />{' '}
                <div className='main'>
                    {selectedPage === 'orders' ? (
                        <Order />
                    ) : selectedPage === 'payments' ? (
                        <Payments />
                    ) : selectedPage === 'addresses' ? (
                        <Addresses />
                    ) : selectedPage === 'settings' ? (
                        <Settings />
                    ) : (
                        <Order />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Profile
