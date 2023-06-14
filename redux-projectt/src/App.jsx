import { createContext, useReducer, useState } from 'react'
import './App.css'

import Account from './Components/Account'

import { useSelector } from 'react-redux';
import User from './Components/User';

function App() {
  
  const count = useSelector((state)=> state)

  return (
    
    <div className="App">
      <h4>this is my redux app</h4>
      <h2> {'hi  guys '} </h2>

      <Account/>
      <User/>

    </div>
      
  )
}

export default App
