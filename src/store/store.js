import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import foodReducer from './foodReducer'

const rootReducer = combineReducers({
    foodState: foodReducer,
})

const middlewareEnhancer = applyMiddleware(thunk)

const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const composedEnhancers = composeWithDevTools(middlewareEnhancer)

const store = createStore(rootReducer, composedEnhancers)

export default function configureStore() {
    return store
}
