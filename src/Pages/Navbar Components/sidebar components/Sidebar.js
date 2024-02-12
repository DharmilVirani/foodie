import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Profile.css'

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
    ]

    return (
        <div className='sidebar'>
            {menu.map((item) => {
                return (
                    <Link
                        to={item.url}
                        className={`sidebar-item ${selected === item.url ? 'bg-color' : ''}`}
                        onClick={() => handleClick(item.url)}
                    >
                        {item.name}
                    </Link>
                )
            })}
        </div>
    )
}
