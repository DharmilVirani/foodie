import React from 'react'
import Name from '../Name'
import Sidebar from './Sidebar'

export default function Address() {
    return (
        <div>
            <Name />
            <div className='profile-body'>
                <Sidebar />
            </div>
        </div>
    )
}
