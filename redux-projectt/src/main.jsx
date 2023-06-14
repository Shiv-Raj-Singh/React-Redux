import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// react redux library to get state and manage that globally 
import {Provider} from 'react-redux';

// Set Up Redux 

// import {createStore , applyMiddleware , combineReducers} from 'redux'
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
// import Reducer from './Reducers/AccountReducer'
// import UserReducer from './Reducers/UserReducer'
// Using Simple Redux 
// const store = createStore(combineReducers({account : Reducer, user : UserReducer}) , applyMiddleware( thunk))
// const store = createStore(Reducer)

// Using Redux-Toolkit 


import { configureStore } from '@reduxjs/toolkit'
import AccountSlice from './Slices/AccountSlice'
import userReducer from './Slices/userSlice';
const store = configureStore({
  reducer : {
    counter : AccountSlice , 
    user : userReducer
  }
})

const data = store.getState()
console.log('data is ' ,  data);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store }>
    <App />
    </Provider>
  </React.StrictMode>,
)
