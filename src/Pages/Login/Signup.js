import { Button, Checkbox } from 'antd'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputField from '../../Components/InputField'

export const userArray2 = []

const Signup = () => {
    const navigate = useNavigate() // useNavigate replaces useHistory
    const [input, setInput] = useState({
        username: '',
        password: '',
        email: '',
        mobile: '',
    })

    const [error, setError] = useState({
        username: '',
        password: '',
        email: '',
        mobile: '',
    })
    const [rememberMe, setRememberMe] = useState(false)

    const myFunction = (e) => {
        setRememberMe(e.target.checked)
    }

    const inputChange = (e) => {
        const { name, value } = e.target
        setInput({
            ...input,
            [name]: value,
        })
        validateInput(e)
    }

    const validateInput = (e) => {
        let { name, value } = e.target
        let errorMessage = ''
        if (name === 'mobile' && (value.length !== 10 || isNaN(value))) {
            errorMessage = 'Mobile number must include 10 digits, Required Field'
        }
        if (value === '') {
            errorMessage = 'Required Field'
        }
        setError({ ...error, [name]: errorMessage })
    }

    useEffect(() => {
        let isAuth = localStorage.getItem('token') && JSON.parse(localStorage.getItem('token'))
        if (isAuth) {
            navigate('/') // Use navigate instead of history.push
        }
    }, [navigate])

    const handleSignup = async () => {
        try {
            const isAnyFieldEmpty = Object.values(input).some((value) => value.trim() === '')
            if (isAnyFieldEmpty) {
                alert('Please fill in all fields.')
                return
            }

            if (input.mobile.trim().length !== 10 || isNaN(input.mobile.trim())) {
                alert('Mobile number must contain exactly 10 digits.')
                return
            }

            const response = await fetch('http://localhost:5000/newuser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(input),
            })
            const data = await response.json()
            if (response.ok) {
                // Signup successful
                console.log('Signup successful:', data.message)
                if (error.username || error.password) return
                localStorage.setItem('token', true)
                localStorage.setItem('user', JSON.stringify(input))
                localStorage.setItem('rememberMe', rememberMe)
                if (userArray2.length !== 0) userArray2.pop()
                userArray2.push(input.username.toString())
                // Redirect to home page or perform any other action
                navigate('/') // Use navigate instead of history.push
            } else {
                // Signup failed
                console.error('Signup failed:', data.message)
                // Handle error (e.g., display error message)
                alert(data.message)
            }
        } catch (error) {
            console.error('Signup error:', error)
            // Handle error (e.g., display error message)
        }
    }

    return (
        <div className='login-card-container'>
            <div className='login-card-content'>
                <div className='login-card-title'>Sign Up</div>
                <div className='login-card-field'>
                    <InputField
                        name='username'
                        value={input.username}
                        label='Username'
                        error={error.username}
                        placeholder='Username...'
                        onChange={inputChange}
                        onBlur={validateInput}
                    />
                </div>
                <div className='login-card-field'>
                    <InputField
                        name='password'
                        value={input.password}
                        label='Password'
                        error={error.password}
                        placeholder='Password...'
                        onChange={inputChange}
                        onBlur={validateInput}
                        type='password'
                    />
                </div>
                <div className='login-card-field'>
                    <InputField
                        name='email'
                        value={input.email}
                        label='Email'
                        error={error.email}
                        placeholder='Email...'
                        onChange={inputChange}
                        onBlur={validateInput}
                    />
                </div>
                <div className='login-card-field'>
                    <InputField
                        name='mobile'
                        value={input.mobile}
                        label='Mobile'
                        error={error.mobile}
                        placeholder='Mobile...'
                        onChange={inputChange}
                        onBlur={validateInput}
                    />
                </div>
                <div className='login-card-field'>
                    <Checkbox checked={rememberMe} onChange={myFunction}>
                        Remember Me
                    </Checkbox>
                </div>
                <div className='login-card-field'>
                    <Button style={{ width: '100%' }} onClick={handleSignup} type='primary'>
                        Sign Up
                    </Button>
                </div>
                <div className='login-card-field'>
                    Want to explore ??&nbsp;
                    <Link to='/'>Home</Link>
                </div>
                <div className='login-card-field'>
                    Already have an account ??&nbsp;
                    <Link to='/login'>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup
