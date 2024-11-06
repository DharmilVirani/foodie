import React from 'react'

export default function Sidebar({ setSelectedPage, selectedPage }) {
    const menu = [
        {
            url: 'orders',
            name: 'Orders',
        },

        {
            url: 'payments',
            name: 'Payments',
        },
        {
            url: 'addresses',
            name: 'Addresses',
        },
        {
            url: 'settings',
            name: 'Settings',
        },
    ]

    return (
        <div className='sidebar'>
            {menu.map((item, index) => (
                <div
                    key={index}
                    className={`sidebar-item ${selectedPage === item.url ? 'bg-white' : ''}`}
                    onClick={() => setSelectedPage(item.url)}
                    style={{ cursor: 'pointer' }}
                >
                    {item.name}
                </div>
            ))}
        </div>
    )
}
