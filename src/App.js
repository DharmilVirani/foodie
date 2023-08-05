import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'

import configureStore from './store/store'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Navbar from './Components/Navbar'
import Login from './Pages/Login'

import './App.css'
import './Pages/login.css'

const store = configureStore()

function App() {
    const history = useHistory()
    const route = history?.location?.pathname || window.location.pathname
    const noNavPage = ['/signup', '/login']

    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    {!noNavPage.includes(route) && (
                        <Navbar
                            title={
                                <b style={{ fontFamily: 'unset', fontSize: 40, marginLeft: '30%', color: 'white' }}>
                                    <>foodie</>
                                </b>
                            }
                            loginText={
                                <b style={{ fontFamily: 'Garamond', fontSize: 25, marginLeft: 70, opacity: 0.7 }}>
                                    Log in
                                </b>
                            }
                            signinText={
                                <b style={{ fontFamily: 'Garamond', fontSize: 25, marginLeft: 60, opacity: 0.7 }}>
                                    Sign Up
                                </b>
                            }
                            homeText={
                                <b
                                    style={{
                                        fontFamily: 'Garamond',
                                        fontSize: 25,
                                        marginLeft: '90%',
                                        opacity: 0.7,
                                    }}
                                >
                                    Home
                                </b>
                            }
                        />
                    )}
                    <Switch>
                        <Route exact path='/signup' component={Signup} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/' component={Home} />
                        <Route path='*' component={() => <NotFound />} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        </>
    )
}

export default App
