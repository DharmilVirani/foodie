import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    const [selected, setSelected] = useState(window.location.pathname)
    const handleClick = (event) => {
        setSelected(event)
    }
    const menu = [
        {
            url: '/profile/orders',
            name: 'Orders',
        },
        {
            url: '/profile/favourites',
            name: 'Favourites',
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
            {menu.map((item) => {
                return (
                    <Link
                        to={item.url}
                        className={`sidebar-item ${selected === item.url ? 'bg-white' : ''}`}
                        onClick={() => handleClick(item.url)}
                    >
                        {item.name}
                    </Link>
                )
            })}
        </div>
    )
}
