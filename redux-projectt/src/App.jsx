import { useReducer, useState } from 'react'
import './App.css'

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
    <div className="App">

      <h4>this is my redux app</h4>

      <button  onClick={()=>dispatch({type :"INCREMENT"})} >
          increase
      </button> <br />
      
      <h5 style={{
        color:'gold' , 
      }} >
          Count is  <h2 style={{display : "inline"  , color : "white" }}   >  :       {count} </h2>
      </h5>

      <button onClick={()=>dispatch({type : 'DECREMENT'})} >
          Decrease
      </button>


    </div>
  )
}

export default App
