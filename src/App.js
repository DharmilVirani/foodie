import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import configureStore from './store/store'
import Login from './Pages/Login'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'

import './App.css'

const store = configureStore()

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/' component={Home} />
                    <Route path='*' component={() => <NotFound />} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default App
