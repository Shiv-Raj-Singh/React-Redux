import { createReducer, createAction } from "@reduxjs/toolkit";

// Create Few Actions According User 
export const onChangeField = createAction('user/onChange')  // Update All fields On change Value of input value 
export const onRegister = createAction('user/Register')    // dispatch action click Register BTN 
export const onLogin = createAction('user/login')          // Dispatch action while user want login 

const dummyUser = {
    name : '' , email : '' , phone : '' , age : ''
}
const userReducer = createReducer(dummyUser , builder=>{
    builder
    .addCase(onChangeField , (state , action )=>{    
        console.log('on Change ' , action );    
        return {...state , [action.payload.field] : action.payload.value}        
    }) 
})

export default userReducer