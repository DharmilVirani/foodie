import React from 'react'
//antd
const Login = () => {
    return (
        <>
            <h1>Login Screen</h1>
            <html>
    <head>
        <title> Login Form </title>
        <link rel="stylesheet" type="text/css" href="login.css" />
    </head>
    <body>
        <form class="form">
            <fieldset>
            <h2 style="text-align: center; font-size: 40px; color: blue;">Login</h2>
            <p>
            <label>Username:</label>
            <input type="text" id="uname" autocomplete="off" placeholder="Please enter your name"
            onkeyup="white(this.value)" />
            </p>   
            <p> 
            <label>Password:</label>
            <input type="password" class="psd" autocomplete="off" placeholder="Please enter password"
            onkeyup="passCheck(this.value)" />
            </p>
            <p>
            <label>Confirm Password:</label>
            <input type="password" class="conpsd" autocomplete="off" placeholder="Please confirm your password" />
            <div>
                <laber class="password_check">1 UPPERCASE Charachter</laber>
                <label class="password_check">1 Special Charachter</label>
                <label class="password_check">1 Numerical Charachter</label>
            <div class="showpsd">
                <button style="width: 200px;" type="button" 
                onclick="show(this.value)">Show Password</button>
            </div>
            </div>
            </p>
            <button type="submit" id="submit">Login</button>
            <button type="reset" id="reset">Reset</button>
            <p>
                <error id="alert1" style="font-size: 20px; color: red; font-weight: 900;"></error>
                <error id="alert2" style="font-size: 20px; color: red; font-weight: 900;"></error>

            </p>
        </fieldset>
        </form>
    </body>
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
    </script>
</html>
        </>
    )
}

export default Login
