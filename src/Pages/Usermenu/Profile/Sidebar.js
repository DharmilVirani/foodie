import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
    const menu = [
        {
            url: '/profile/orders',
            name: 'Orders',
        },
        {
            url: '/profile/payments',
            name: 'Payments',
        },
        {
            url: '/profile/addresses',
            name: 'Addresses',
        },
        {
            url: '/profile/settings',
            name: 'Settings',
        },
    ]

    return (
        <div className='sidebar'>
            {menu.map((item, index) => (
                <NavLink
                    key={index}
                    to={item.url}
                    className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
                    style={{ textDecoration: 'none' }}
                >
                    {item.name}
                </NavLink>
            ))}
        </div>
    )
}

export default Sidebar
