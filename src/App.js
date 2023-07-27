import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import configureStore from './store/store'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'

import './App.css'
import Navbar from './Components/Navbar'

const store = configureStore()

function App() {
    return (
        <>
            <Navbar
                title=<b style={{ fontFamily: 'Amita', fontSize: 40, marginLeft: 100 }}>
                    <i>foodie</i>
                </b>
                loginText=<b style={{ fontFamily: 'Garamond', fontSize: 25, marginLeft: 150, opacity: 0.7 }}>Log in</b>
                signinText=<b style={{ fontFamily: 'Garamond', fontSize: 25, marginLeft: 60, opacity: 0.7 }}>Sign Up</b>
            />
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/signup' component={Signup} />
                        <Route exact path='/' component={Home} />
                        <Route path='*' component={() => <NotFound />} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        </>
    )
}

export default App
