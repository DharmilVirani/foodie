import { Button, Checkbox, Input } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [input, setInput] = useState({
        username: '',
        password: '',
    })

    const [error, setError] = useState({
        username: '',
        password: '',
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
    }

    return (
        <div className='login-card-container'>
            <div className='login-card-content'>
                <div className='login-card-title'>Login</div>
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
                    <Checkbox checked={rememberMe} onChange={myFunction}>
                        Remember Me
                    </Checkbox>
                </div>
                <div className='login-card-field'>
                    <Button
                        style={{ marginTop: '10px', marginBottom: '10px', width: '100%' }}
                        // TODO:
                        onClick={() => {
                            if (!input.username || !input.password) return
                        }}
                        type='primary'
                    >
                        Login
                    </Button>
                </div>
                <div className='login-card-field'>
                    Want to explore ??&nbsp;
                    <Link to='/' style={{ textDecoration: 'none', color: 'orange' }}>
                        Home
                    </Link>
                </div>
                <div className='login-card-field'>
                    Don't have an account ??&nbsp;
                    <Link to='/signup' style={{ textDecoration: 'none', color: 'blue' }}>
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login
