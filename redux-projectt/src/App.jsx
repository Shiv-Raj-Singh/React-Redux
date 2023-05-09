import { createContext, useReducer, useState } from 'react'
import './App.css'
import Reducer from './Reducers/AccountReducer';
import Account from './Components/Account'
import { useSelector } from 'react-redux';
import User from './Components/User';



export const myContest = createContext(null)


function App({store}) {
  
  const count = useSelector((state)=> state.account.count)

  return (
    <myContest.Provider value={store} >
    <div className="App">
      <h4>this is my redux app</h4>
      <h2> {count} </h2>

      <Account/>
      <User/>

    </div>
    </myContest.Provider>
      
  )
}

export default App
