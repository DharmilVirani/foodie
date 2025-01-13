import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Address = () => {
    const [addresses, setAddresses] = useState([])
    const navigate = useNavigate()
    const userId = localStorage.getItem('uniqueId')

    useEffect(() => {
        fetchAddresses()
    }, [])

    const fetchAddresses = async () => {
        try {
            const response = await fetch(`http://localhost:5000/get-addresses?userId=${userId}`)
            const data = await response.json()
            setAddresses(data.addresses)
        } catch (error) {
            console.error('Error fetching addresses:', error)
        }
    }

    const deleteAddress = async (uniqueId) => {
        try {
            if (!userId) {
                alert('User is not logged in')
                return
            }

            const response = await fetch('http://localhost:5000/delete-address', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, uniqueId }),
            })

            const data = await response.json()

            if (response.ok) {
                alert(data.message)
                window.location.reload()
                setAddresses((prevAddresses) => prevAddresses.filter((address) => address.uniqueId !== uniqueId))
            } else {
                alert(data.error || 'Failed to delete address')
            }
        } catch (error) {
            console.error('Error deleting address:', error)
            alert('Failed to delete address')
        }
    }

    const editAddress = async (uniqueId) => {
        const selectedAddress = addresses.find((address) => address.uniqueId === uniqueId)
        if (selectedAddress) {
            navigate('/addNewAddress', { state: { address: selectedAddress } })
        }
    }

    return (
        <div className='address-main-container'>
            {addresses.map((address) => (
                <div className='address-container ' key={address.uniqueId}>
                    <div className='address-heading bottom-border title'>
                        {address.addressName} - {address.addressType}
                    </div>
                    <div className='address-text address-margin'>
                        {address.address.split(',').map((line, index) => (
                            <span key={index}>
                                {line.trim()}
                                {','}
                                <br />
                            </span>
                        ))}
                    </div>
                    <div className='city-address address-margin'>
                        <div>Pincode - {address.pincode}</div>
                        <div>City - {address.city}</div>
                    </div>
                    <div className='address-button-container top-border address-margin'>
                        <button className='address-button' onClick={() => editAddress(address.uniqueId)}>
                            EDIT
                        </button>
                        <button className='address-button' onClick={() => deleteAddress(address.uniqueId)}>
                            DELETE
                        </button>
                    </div>
                </div>
            ))}
            <div className='add-address-container'>
                <Link to='/addNewAddress'>
                    <svg viewBox='0 0 24 24' fill='#37718e' className='add-icon'>
                        <path d='M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z'></path>
                    </svg>
                </Link>
                <div className='address-heading'>ADD NEW ADDRESS</div>
            </div>
        </div>
    )
}

export default Address
