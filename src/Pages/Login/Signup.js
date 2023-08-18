import { Button, Checkbox, Input } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [input, setInput] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    })

    const [error, setError] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    })
    const [rememberMe, setRememberMe] = useState(true)

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
        if (value && name.toLowerCase().includes('password')) {
            if (input.password !== input.confirmPassword)
                setError({ ...error, [name]: 'Password and Confirm Password does not match.' })
        }
    }

    return (
        <div className='login-card-container'>
            <div className='login-card-content'>
                <div className='login-card-title'>Sign Up</div>
                <div className='login-card-field'>
                    <label>Username</label>
                    <Input
                        status={error.username ? 'error' : undefined}
                        placeholder='Username'
                        value={input.username}
                        onChange={inputChange}
                        name='username'
                        onBlur={validateInput}
                    />
                    <span className='error-span'>{error.username}</span>
                </div>
                <div className='login-card-field'>
                    <label>Password</label>
                    <Input.Password
                        name='password'
                        status={error.password ? 'error' : undefined}
                        placeholder='Password'
                        value={input.password}
                        onChange={inputChange}
                        onBlur={validateInput}
                    />
                    <span className='error-span'>{error.password}</span>
                </div>
                <div className='login-card-field'>
                    <label>Confirm Password</label>
                    <Input.Password
                        name='confirmPassword'
                        status={error.confirmPassword ? 'error' : undefined}
                        placeholder='Confirm Password'
                        value={input.confirmPassword}
                        onChange={inputChange}
                        onBlur={validateInput}
                    />
                    <span className='error-span'>{error.confirmPassword}</span>
                </div>
                <div className='login-card-field'>
                    <Checkbox checked={rememberMe} onChange={myFunction}>
                        Remember Me
                    </Checkbox>
                </div>
                <div className='login-card-field'>
                    <Button
                        style={{ marginTop: '10px', marginBottom: '10px', width: '100%' }}
                        // TODO:
                        onClick={() => {
                            if (!input.username || !input.password || !input.confirmPassword) return
                        }}
                        type='primary'
                    >
                        Sign Up
                    </Button>
                </div>
                <div className='login-card-field'>
                    Want to explore ??&nbsp;
                    <Link to='/' style={{ textDecoration: 'none', color: 'orange' }}>
                        Home
                    </Link>
                </div>
                <div className='login-card-field'>
                    Already have an account ??&nbsp;
                    <Link to='/login' style={{ textDecoration: 'none', color: 'blue' }}>
                        Login
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Signup
