import { Button, Checkbox } from 'antd'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputField from '../../Components/InputField'

const Login = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        username: '',
        password: '',
    })

    const [error, setError] = useState({
        username: '',
        password: '',
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
        setError({ ...error, [name]: value ? '' : 'Required field' })
    }

    useEffect(() => {
        let isAuth = localStorage.getItem('token') && JSON.parse(localStorage.getItem('token'))
        if (isAuth) {
            navigate('/')
        }
    }, [navigate])

    useEffect(() => {
        const rem = localStorage.getItem('rememberMe')
        if (JSON.parse(rem)) setInput(JSON.parse(localStorage.getItem('user')))
    }, [])

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:5000/existing', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(input),
            })
            const data = await response.json()
            if (response.ok) {
                if (error.username || error.password) return

                // Save token, username, and uniqueId in localStorage
                localStorage.setItem('token', true)
                localStorage.setItem('username', input.username) // Save the logged-in username
                localStorage.setItem('user', JSON.stringify(input))
                localStorage.setItem('rememberMe', rememberMe)

                // Save uniqueId from the server response
                localStorage.setItem('uniqueId', data.uniqueId) // Store uniqueId

                navigate('/')
            } else {
                alert(`Login failed: ${data.message}`)
            }
        } catch (error) {
            console.log(`Login error: ${error}`)
        }
    }

    return (
        <div className='login-card-container'>
            <div className='login-card-content'>
                <div className='login-card-title'>Login</div>
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
                    <Checkbox checked={rememberMe} onChange={myFunction}>
                        Remember Me
                    </Checkbox>
                </div>
                <div className='login-card-field'>
                    <Button className='login-button' style={{ width: '100%' }} onClick={handleLogin} type='primary'>
                        Login
                    </Button>
                </div>
                <div className='login-card-field'>
                    Want to explore ??&nbsp;
                    <Link to='/'>Home</Link>
                </div>
                <div className='login-card-field'>
                    Don't have an account ??&nbsp;
                    <Link to='/signup'>Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
