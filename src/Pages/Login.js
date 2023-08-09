import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//antd

const Login = () => {
    const [input, setInput] = useState({
        username: '',
        password: '',
    })

    const [error, setError] = useState({
        username: '',
        password: '',
    })

    const [showpsd, setShowpsd] = useState('password')

    const myFunction = (e) => {
        if (e.target.checked === true) {
            setShowpsd('text')
        } else {
            setShowpsd('password')
        }
    }
    const inputChange = (e) => {
        const { name, value } = e.target
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }))
        validateInput(e)
    }

    const validateInput = (e) => {
        let { name, value } = e.target
        setError((prev) => {
            const stateObj = { ...prev, [name]: '' }

            switch (name) {
                case 'username':
                    if (!value) {
                        stateObj[name] = 'Please Enter Username.'
                    }
                    break
                case 'password':
                    if (!value) {
                        stateObj[name] = 'Please Enter Password.'
                    }
                    break
                default:
                    break
            }

            return stateObj
        })
    }
    return (
        <>
            <form className='form'>
                <fieldset style={{ border: '2px black solid', padding: '10px', width: '600px' }}>
                    <h2
                        style={{
                            textAlign: 'center',
                            fontSize: '40px',
                            color: 'black',
                        }}
                    >
                        <u>
                            <b> Login </b>
                        </u>
                    </h2>
                    <p>
                        <label>Username:</label>
                        <input
                            type='text'
                            id='uname'
                            autoComplete='off'
                            placeholder='Username...'
                            name='username'
                            value={input.username}
                            onChange={inputChange}
                            onBlur={validateInput}
                        />
                        {error.username && (
                            <span className='err' style={{ color: 'red' }}>
                                {error.username}
                            </span>
                        )}
                    </p>
                    <p>
                        <label>Password:</label>
                        <input
                            type={showpsd}
                            className='psd'
                            autoComplete='off'
                            placeholder='Password...'
                            value={input.password}
                            onkeyup='passCheck(this.value)'
                            name='password'
                            onChange={inputChange}
                            onBlur={validateInput}
                        />
                        {error.password && (
                            <span className='err' style={{ color: 'red' }}>
                                {error.password}
                            </span>
                        )}
                    </p>
                    <input type='checkbox' onChange={myFunction} />
                    &nbsp; Show Password
                    <p>
                        <div>
                            Don't want to create account? Explore our&nbsp;
                            <Link to='./' style={{ textDecoration: 'none', color: 'orange' }}>
                                Home
                            </Link>
                            <br />
                            Already have an account?&nbsp;
                            <Link to='./signup' style={{ textDecoration: 'none', color: 'red' }}>
                                Sign Up
                            </Link>
                        </div>
                    </p>
                    <button
                        type='submit'
                        id='submit'
                        disabled={!input.username ? true : false && !input.password ? true : false}
                    >
                        Login
                    </button>
                    <button type='reset' id='reset'>
                        Reset
                    </button>
                </fieldset>
            </form>
        </>
    )
}

export default Login
