import { useContext } from "react";
import { myContest } from "../App";


const Account = () => {

    const {dispatch, count} = useContext(myContest)

    return (
        <>
        
        <h2>this is Account Components and Current count is {count} </h2>

        
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


        </>
    );
}

export default Account;