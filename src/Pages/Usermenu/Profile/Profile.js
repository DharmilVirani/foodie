import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import Name from '../Name'
import Order from './Order'
import Payments from './Payments'
import Address from './Address'
import Settings from './Settings'

import './Sidebar.css'

const Profile = () => {
    const location = useLocation()
    const currentPage = location.pathname.split('/').pop() || 'orders' // Default to 'orders'

    return (
        <div className='profile-container'>
            <Name />
            <div className='profile-body'>
                <Sidebar selectedPage={currentPage} />
                <div className='main'>
                    {currentPage === 'orders' ? (
                        <Order />
                    ) : currentPage === 'payments' ? (
                        <Payments />
                    ) : currentPage === 'addresses' ? (
                        <Address />
                    ) : currentPage === 'settings' ? (
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
