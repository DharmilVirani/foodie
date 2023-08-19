import { Button, Checkbox } from 'antd'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import InputField from '../../Components/InputField'

const Signup = () => {
    const history = useHistory()
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
        if (value && name.toLowerCase().includes('password') && input.password && input.confirmPassword) {
            setError({
                ...error,
                [name]: input.password !== input.confirmPassword ? 'Password and Confirm Password does not match.' : '',
            })
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
                        name='confirmPassword'
                        value={input.confirmPassword}
                        label='Confirm Password'
                        error={error.confirmPassword}
                        placeholder='Confirm Password...'
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
                            if (error.username || error.password || error.confirmPassword) return
                            localStorage.setItem('token', true)
                            localStorage.setItem('user', JSON.stringify(input))
                            localStorage.setItem('rememberMe', rememberMe)
                            history.push('/')
                        }}
                        type='primary'
                    >
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
