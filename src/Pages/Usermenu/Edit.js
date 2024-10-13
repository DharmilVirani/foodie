import React, { useEffect, useState } from 'react'
import './Edit.css'
import { CloseOutlined } from '@ant-design/icons'
const Edit = ({ onClose }) => {
    const [username, setUsername] = useState('')
    const [userData, setUserData] = useState('')
    const [isPhoneNumberEditable, setIsPhoneNumberEditable] = useState(false)
    const [isEmailEditable, setIsEmailEditable] = useState(false)
    const [phoneNumberButtonLabel, setPhoneNumberButtonLabel] = useState('CHANGE')
    const [emailButtonLabel, setEmailButtonLabel] = useState('CHANGE')

    useEffect(() => {
        // Fetch the username from local storage or state where you stored it after login
        const storedUsername = JSON.parse(localStorage.getItem('user')).username
        setUsername(storedUsername)
    }, [])

    useEffect(() => {
        // Fetch user data by username
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/user/${username}`)
                const data = await response.json()
                if (response.ok) {
                    setUserData(data)
                } else {
                    console.error('Fetch user data failed:', data.message)
                }
            } catch (error) {
                console.error('Fetch user data error:', error)
            }
        }
        fetchUserData()
    }, [username])

    const handlePhoneNumberChange = () => {
        setIsPhoneNumberEditable(true)
        setPhoneNumberButtonLabel('SUBMIT')
    }

    const handleEmailChange = () => {
        setIsEmailEditable(true)
        setEmailButtonLabel('SUBMIT')
    }

    const handleSubmitPhoneNumber = () => {
        setIsPhoneNumberEditable(false)
        setPhoneNumberButtonLabel('CHANGE')
    }

    const handleSubmitEmail = () => {
        setIsEmailEditable(false)
        setEmailButtonLabel('CHANGE')
    }

    return (
        <div className='side-edit-container'>
            <div className='side-edit-heading'>
                <div className='side-edit-head'>Edit Profile</div>
                <div className='closebtn' onClick={onClose}>
                    <CloseOutlined />
                </div>
            </div>
            <div className='side-edit-main'>
                <h5>Phone Number</h5>
                <div className='side-edit-inputcontainer'>
                    <input className='userdata-input' value={userData.mobile} disabled={!isPhoneNumberEditable} />
                    <button
                        className='change-submit-btn'
                        onClick={isPhoneNumberEditable ? handleSubmitPhoneNumber : handlePhoneNumberChange}
                    >
                        {phoneNumberButtonLabel}
                    </button>
                </div>
            </div>
            <hr />
            <div className='side-edit-main'>
                <h5>Email id</h5>
                <div className='side-edit-inputcontainer'>
                    <input className='userdata-input' value={userData.email} disabled={!isEmailEditable} />
                    <button
                        className='change-submit-btn'
                        onClick={isEmailEditable ? handleSubmitEmail : handleEmailChange}
                    >
                        {emailButtonLabel}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Edit
