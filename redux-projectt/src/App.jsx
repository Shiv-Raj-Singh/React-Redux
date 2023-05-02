import { createContext, useReducer, useState } from 'react'
import './App.css'
import Account from './Components/Account'

export const myContest = createContext(null)

const reducer = (state , action)=>{
    switch(action.type){
      case 'INCREMENT':
        return state+1
      case 'DECREMENT' :
        return state - 1
      default :
        return state
    } 
}

function App() {
  const [count, dispatch] = useReducer(reducer , 0)

  return (
    <myContest.Provider value={{dispatch , count}} >
    <div className="App">
      <h4>this is my redux app</h4>
      <h1>{count}</h1>
      {/* <Account  count={count} dispatch={dispatch} /> */}
      <Account/>
    </div>
    </myContest.Provider>
      
  )
}

export default App
