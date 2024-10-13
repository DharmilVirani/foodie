import React from 'react'
import './Address.css'

const Address = () => {
    return (
        <div className='main-address-container'>
            <div className='address-container'>
                <div className='address-heading'>XYZ</div>
                <div className='address'>XXXXXXXXXXX YYYYYYYYYYY ZZZZZZZZ</div>
                <div className='btns'>
                    <button className='butn'>EDIT</button>
                    <button className='butn'>DELETE</button>
                </div>
            </div>
        </div>
    )
}
export default Address
