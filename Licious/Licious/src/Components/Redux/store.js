import { legacy_createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { reducer } from './reducer'
import thunk from 'redux-thunk'
import { authReducer } from "./Auth/auth.reducer";
const totalReducer = combineReducers({
    authManager: authReducer,
    reducer: reducer
});
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = legacy_createStore(totalReducer, composeEnchancers(applyMiddleware(thunk)))


export { store }