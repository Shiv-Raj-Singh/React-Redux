import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


// Set Up Redux 
import {createStore , applyMiddleware , combineReducers} from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import {Provider} from 'react-redux';


import Reducer from './Reducers/AccountReducer'
import UserReducer from './Reducers/UserReducer'
const store = createStore(combineReducers({account : Reducer, user : UserReducer}) , applyMiddleware( thunk))


// const store = createStore(Reducer)
const data = store.getState()
console.log('data is ' ,  data.account);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store }>
    <App />
    </Provider>
  </React.StrictMode>,
)
