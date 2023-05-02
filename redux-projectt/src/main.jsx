import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


// Set Up Redux 
import {createStore , applyMiddleware , combineReducers} from 'redux'
import logger from 'redux-logger';
import {Provider} from 'react-redux';


import Reducer from './Reducers/AccountReducer'
const store = createStore(combineReducers({account : Reducer}) , applyMiddleware(logger))


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
