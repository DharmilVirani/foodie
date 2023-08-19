import { Button, Checkbox } from 'antd'
import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import InputField from '../../Components/InputField'

const Login = () => {
    const history = useHistory()
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

    useEffect(() => {
        let isAuth = localStorage.getItem('token') && JSON.parse(localStorage.getItem('token'))
        if (isAuth) {
            history.push('/')
        }
    }, [history])

    useEffect(() => {
        const rem = localStorage.getItem('rememberMe')
        if (JSON.parse(rem)) setInput(JSON.parse(localStorage.getItem('user')))
    }, [])

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
                    <Button
                        style={{ width: '100%' }}
                        onClick={() => {
                            if (error.username || error.password) return
                            localStorage.setItem('token', true)
                            localStorage.setItem('user', JSON.stringify(input))
                            localStorage.setItem('rememberMe', rememberMe)
                            history.push('/')
                        }}
                        type='primary'
                    >
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
