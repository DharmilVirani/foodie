import React, { useState } from 'react'

import './login.css'

//antd

const Signup = () => {
    const [alert1, setAlert1] = useState('')

    return (
        <>
            <form className='form'>
                <fieldset style={{ border: '2px blue solid', padding: '10px' }}>
                    <h2
                        style={{
                            textAlign: 'center',
                            fontSize: '40px',
                            color: 'blue',
                        }}
                    >
                        <u>
                            <b> Sign Up </b>
                        </u>
                    </h2>
                    <p>
                        <label>Username:</label>
                        <input type='text' id='uname' autoComplete='off' placeholder='Please enter your name' />
                    </p>
                    <p>
                        <label>Password:</label>
                        <input
                            type='password'
                            className='psd'
                            autoComplete='off'
                            placeholder='Please enter password'
                            onkeyup='passCheck(this.value)'
                        />
                    </p>
                    <p>
                        <label>Confirm Password:</label>
                        <input
                            type='password'
                            className='conpsd'
                            autocomplete='off'
                            placeholder='Please confirm your password'
                        />
                        <div>
                            <label className='password_check'>1 UPPERCASE Charachter</label>
                            <label className='password_check'>1 Special Charachter</label>
                            <label className='password_check'>1 Numerical Charachter</label>
                            <div className='showpsd'>
                                <button
                                    style={{ width: '200px' }}
                                    type='button'
                                    onClick={(x) => {
                                        var password = document.getElementsByClassName('psd')
                                        var y = password.getAttribute('type')
                                        if (y === 'password') {
                                            password.setAttribute('type', 'text')
                                            x.innerText = 'Hide Password'
                                        } else {
                                            password.setAttribute('type', 'password')
                                            x.innerText = 'Show Password'
                                        }
                                    }}
                                >
                                    Show Password
                                </button>
                            </div>
                        </div>
                    </p>
                    <button type='submit' id='submit'>
                        Sign Up
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
