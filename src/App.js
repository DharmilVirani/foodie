import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import configureStore from './store/store'
import Signup from './Pages/Login/Signup'
import Home from './Pages/Home/Home'
import NotFound from './Pages/NotFound'
import Navbar from './Components/Navbar/Navbar'
import Login from './Pages/Login/Login'
import Profile from './Pages/Usermenu/Profile'

import './Pages/Login/login.css'
import './Components/Navbar/Navbar.css'
import './Pages/Home/Home.css'
import './Pages/Usermenu/Profile/Profile.css'

const store = configureStore()

function App() {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/signup' component={Signup} />
                        <Route exact path='/profile/:id' component={Profile} />
                        <Route exact path='*' component={() => <NotFound />} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        </>
    )
}

export default App
