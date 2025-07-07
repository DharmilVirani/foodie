import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const AddAddress = () => {
    const location = useLocation()
    const addressToEdit = location.state?.address || {}
    const isEditMode = !!addressToEdit.uniqueId
    const [cities, setCities] = useState([])
    const [formData, setFormData] = useState({
        addressType: addressToEdit.addressType || '',
        addressName: addressToEdit.addressName || '',
        address: addressToEdit.address || '',
        city: addressToEdit.city || '',
        pincode: addressToEdit.pincode || '',
    })

    useEffect(() => {
        getCities()
    }, [])

    const getCities = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/cities')
            const cityData = await response.json()
            setCities(cityData)
        } catch (error) {
            console.log('Error fetching cities: ', error)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleSubmit = async () => {
        const userId = localStorage.getItem('uniqueId')

        if (!userId) {
            alert('User not logged in')
            return
        }

        try {
            const url = isEditMode ? 'http://localhost:5000/update-address' : 'http://localhost:5000/add-address'

            const method = isEditMode ? 'PUT' : 'POST'

            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    userId,
                    ...(isEditMode && { uniqueId: addressToEdit.uniqueId }),
                }),
            })

            const data = await response.json()
            if (response.ok) {
                alert(isEditMode ? 'Address updated successfully' : 'Address added successfully')
                window.location.href = '/profile/addresses'
            } else {
                alert(data.error || 'Failed to add address')
                window.location.reload()
            }
        } catch (error) {
            console.error('Error adding address:', error)
            alert('Failed to add address')
        }
    }

    const back = () => {
        window.location.href = '/profile/addresses'
    }

    const handlePincodeChange = (e) => {
        const { name, value } = e.target

        if (name === 'addressPincode' && (value.length > 6 || /\D/.test(value))) {
            return
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    return (
        <div className='address-form-container'>
            <div className='address-form-subcontainer'>
                <h2 className='address-form-title'>{isEditMode ? 'UPDATE ADDRESS' : 'ADD NEW ADDRESS'}</h2>{' '}
                <div className='address-radiobutton-container'>
                    <div className='address-type'>Type of Address :</div>
                    <div>
                        <input
                            type='radio'
                            name='addressType'
                            value='Home'
                            className='zoom'
                            checked={formData.addressType === 'Home'}
                            onChange={handleChange}
                        />
                        <label>Home</label>
                    </div>
                    <div>
                        <input
                            type='radio'
                            name='addressType'
                            value='Work'
                            className='zoom'
                            checked={formData.addressType === 'Work'}
                            onChange={handleChange}
                        />
                        <label>Work</label>
                    </div>
                </div>
                <input
                    type='text'
                    name='addressName'
                    className='address-form-heading full-address-width address-no-border zoom'
                    placeholder="Name of Address (Example: XYZ's Home)..."
                    value={formData.addressName}
                    onChange={handleChange}
                />
                <textarea
                    name='address'
                    rows={1}
                    className='address-input full-address-width address-no-border zoom'
                    placeholder='Home Name, Street Name, Main Area,...'
                    value={formData.address}
                    onChange={handleChange}
                ></textarea>
                <div className='address-type-choice'>
                    <input
                        type='number'
                        name='pincode'
                        className='address-form-pincode address-no-border zoom'
                        placeholder='Pincode'
                        onChange={handlePincodeChange}
                        value={formData.pincode}
                        maxLength={6}
                        onInput={(e) => (e.target.value = e.target.value.slice(0, 6))}
                        pattern='\d{6}'
                        title='Pincode must be exactly 6 digits'
                    />
                    <select
                        name='city'
                        className='address-city full-address-width address-no-border zoom'
                        value={formData.city}
                        onChange={handleChange}
                    >
                        <option value='' disabled>
                            Select a City
                        </option>
                        {[...cities]
                            .sort((a, b) => a.name.localeCompare(b.name))
                            .map((city, index) => (
                                <option key={index} value={city.name}>
                                    {city.name}
                                </option>
                            ))}
                    </select>
                </div>
                <div className='address-buttons-container'>
                    <button className='btn address-submit-btn' onClick={handleSubmit}>
                        {isEditMode ? 'Update Address' : 'Add Address'}
                    </button>
                    <button className='btn back' onClick={back}>
                        Back
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddAddress
