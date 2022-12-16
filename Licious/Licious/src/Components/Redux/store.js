import { legacy_createStore ,applyMiddleware,compose, } from 'redux'
import { reducer } from './reducer'
import thunk from 'redux-thunk'
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = legacy_createStore(reducer,composeEnchancers(applyMiddleware(thunk))) 


export { store }