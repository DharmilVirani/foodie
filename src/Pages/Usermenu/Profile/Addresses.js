import React from 'react'
import Address from './Address'
import './Address.css'

const Addresses = () => {
    return (
        <>
            <h3 className='main-heading'>Manage Address</h3>
            <div className='address-container'>
                <Address />
                <Address />
                <Address />
            </div>
        </>
    )
}
export default Addresses
