import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import configureStore from './store/store'
import Signup from './Pages/Login/Signup'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Navbar from './Components/Navbar/Navbar'
import Login from './Pages/Login/Login'

import './Pages/Login/login.css'
import './Components/Navbar/Navbar.css'

const store = configureStore()

function App() {
    // TODO: login sign up access only when no token

    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Navbar />
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
