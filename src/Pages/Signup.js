import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//antd

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
                        stateObj[name] = 'Please enter Username.'
                    }
                    break

                case 'password':
                    if (!value) {
                        stateObj[name] = 'Please enter Password.'
                    } else if (input.confirmPassword && value !== input.confirmPassword) {
                        stateObj['confirmPassword'] = 'Password and Confirm Password does not match.'
                    } else {
                        stateObj['confirmPassword'] = input.confirmPassword ? '' : error.confirmPassword
                    }
                    break

                case 'confirmPassword':
                    if (!value) {
                        stateObj[name] = 'Please enter Confirm Password.'
                    } else if (input.password && value !== input.password) {
                        stateObj[name] = 'Password and Confirm Password does not match.'
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
                            <b> Sign Up </b>
                        </u>
                    </h2>
                    <p>
                        <label>Username:</label>
                        <input
                            type='text'
                            id='uname'
                            autoComplete='off'
                            placeholder='Username...'
                            value={input.username}
                            onChange={inputChange}
                            onBlur={validateInput}
                            name='username'
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
                            value={input.password}
                            autoComplete='off'
                            placeholder='Password...'
                            onkeyup='passCheck(this.value)'
                            onChange={inputChange}
                            onBlur={validateInput}
                            name='password'
                        />
                        {error.password && (
                            <span className='err' style={{ color: 'red' }}>
                                {error.password}
                            </span>
                        )}
                    </p>
                    <p>
                        <label>Confirm Password:</label>
                        <input
                            type={showpsd}
                            value={input.confirmPassword}
                            className='psd'
                            autocomplete='off'
                            placeholder='Confirm your Password...'
                            onChange={inputChange}
                            onBlur={validateInput}
                            name='confirmPassword'
                        />
                        {error.confirmPassword && (
                            <span className='err' style={{ color: 'red' }}>
                                {error.confirmPassword}
                            </span>
                        )}
                        <br />
                        <input type='checkbox' onChange={myFunction} />
                        &nbsp; Show Password
                        <div>
                            <label className='password_check'>1 UPPERCASE Charachter</label>
                            <label className='password_check'>1 Special Charachter</label>
                            <label className='password_check'>1 Numerical Charachter</label>
                            Don't want to create account? Explore our&nbsp;
                            <Link to='./' style={{ textDecoration: 'none', color: 'orange' }}>
                                Home
                            </Link>
                            <br />
                            Already have an account?&nbsp;
                            <Link to='./login' style={{ textDecoration: 'none', color: 'green' }}>
                                Login
                            </Link>
                        </div>
                    </p>
                    <button
                        type='submit'
                        id='submit'
                        disabled={
                            !input.username
                                ? true
                                : false || !input.password
                                ? true
                                : false || !input.confirmPassword
                                ? true
                                : false || input.password === input.confirmPassword
                                ? false
                                : true
                        }
                    >
                        Sign Up
                    </button>
                    <button type='reset' id='reset'>
                        Reset
                    </button>
                </fieldset>
            </form>
            {/* </body>
    <script>
        var pattern = /\s/g;
        var a1 = document.getElementById('alert1');
        var a2 = document.getElementById('alert2');
        function white(x){
            var isSpace = pattern.test(x);
            if(isSpace){
                a1.innerText = "Space is not Allowed!!";
            }else{
                a1.innerText = "";
            }
        }
        window.addEventListener('keyup',event => {
            var caps = event.getModifierState('CapsLock');
            if(caps){
                a2.innerText = "CapsLock is ON!!"
            }else{
                a2.innerText = "";
            }
        })
        function passCheck(data){
            var passClass = document.getElementsByClassName('password_check');
            const lowercase = new RegExp('(?=.*[a-z])');
            const uppercase = new RegExp('(?=.*[A-Z])');
            const number = new RegExp('(?=.*[0-9])');
            const special = new RegExp('(?=.*[!@#\$%\^&\*])');
            const eightChar = new RegExp('(?=.*[8,])');

            if(uppercase.test(data)){
                passClass[0].style.color = "green";
            }else{
                passClass[0].style.color = "grey";
            }
            if(special.test(data)){
                passClass[1].style.color = "green";
            }else{
                passClass[1].style.color = "grey";
            }
            if(number.test(data)){
                passClass[2].style.color = "green";
            }else{
                passClass[2].style.color = "grey";
            }
        }
        var password = document.getElementsByClassName('psd');
        function show(x){
            var y = password.getAttribute('type');
            if(y == 'password'){
            password.setAttribute('type','text');
            x.innerText = "Hide Password";
            }
            else{
                password.setAttribute('type','password');
                x.innerText = "Show Password";
            }
        }
    </script> */}
        </>
    )
}

export default Signup
