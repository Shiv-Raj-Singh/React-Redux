
import { useDispatch , useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../Actions";
import { useState } from "react";

const Account = ({store}) => {
    const [value , setValue] = useState(0)
    const count = useSelector((state)=> state.account.count)
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
      <button onClick={()=>  dispatch(incrementByAmount(value))} >
          Decrease By Amount
      </button>
      
        </>
    );
}

export default Account;