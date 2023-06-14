//  React - Redux Hooks to Manage get State and Dispatch Actions 
import { useDispatch , useSelector } from "react-redux";

// Using Simple Redux Action Creators Functions 
// import { decrement, increment, incrementByAmount } from "../Actions";

// Using Slice Action Creators Functions 
import { increment , decrement , incByAmt } from "../Slices/AccountSlice";

// react Hooks 
import { useState } from "react";

const Account = ({store}) => {
    const [value , setValue] = useState(0)
    const count = useSelector((state)=> state.counter.count)
    const dispatch = useDispatch()    
    console.log(count   , 'is times count')  ;

    return (
        <>
        
        <h2>this is Account Components and Current count is {count} </h2>

        
      <button  onClick={()=>  dispatch(increment())} >
          increase
      </button> <br />
      
      <h5 style={{
        color:'gold' , 
      }} >
          Count is  <h2 style={{display : "inline"  , color : "white" }}   >  :       {count} </h2>
      </h5>

      <button onClick={()=>  dispatch(decrement())} >
          Decrease
      </button> <br />

      <input type="number" placeholder="enter amount" onChange={(e)=>setValue(e.target.value)} style={{
        background : 'white' , color : 'black' , margin : "1.5%" , height : '3vh'
      }} /> <br />
      <button onClick={()=>  dispatch(incByAmt(value))} >
          Decrease By Amount
      </button>
      
        </>
    );
}

export default Account;