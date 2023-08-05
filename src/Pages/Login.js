import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//antd

const Login = () => {
    const [alert1, setAlert1] = useState('')

    const [showpsd, setShowpsd] = useState('password')

    const myFunction = (e) => {
        if (e.target.checked === true) {
            setShowpsd('text')
        } else {
            setShowpsd('password')
        }
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
                        <input type='text' id='uname' autoComplete='off' placeholder='Please enter your name' />
                    </p>
                    <p>
                        <label>Password:</label>
                        <input
                            type={showpsd}
                            className='psd'
                            autoComplete='off'
                            placeholder='Please enter password'
                            onkeyup='passCheck(this.value)'
                        />
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
                    <button type='submit' id='submit'>
                        Login
                    </button>
                    <button type='reset' id='reset'>
                        Reset
                    </button>
                    <p>
                        <error style={{ fontSize: '20px', color: 'red', fontWeight: 900 }}>{alert1}</error>

                        <error id='alert2' style={{ fontSize: '20px', color: 'red', fontWeight: 900 }}></error>
                    </p>
                </fieldset>
            </form>
        </>
    )
}

export default Login
