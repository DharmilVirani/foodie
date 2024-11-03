import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Name = () => {
    const navigate = useNavigate() // Replacing useHistory with useNavigate

    const [username, setUsername] = useState('')
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        // Fetch the username from local storage or state where you stored it after login
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
            const storedUsername = JSON.parse(storedUser).username
            setUsername(storedUsername)
        }
    }, [])

    useEffect(() => {
        if (username) {
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
        }
    }, [username])

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    return (
        <div className='the-container'>
            <div className='name-container'>
                <div className='name'>
                    {userData ? (
                        <div>
                            <div className='username bold'>{username}</div>
                            <div className='username'>{userData.email}</div>
                            <div className='username'>{userData.mobile}</div>
                        </div>
                    ) : (
                        <div>User data loading...</div>
                    )}
                </div>
                <div className='edit'>
                    <button className='logout-button' onClick={handleLogout}>
                        LOGOUT
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Name
