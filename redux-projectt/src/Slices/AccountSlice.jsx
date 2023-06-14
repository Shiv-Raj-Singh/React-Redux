import { createAction , createSlice } from "@reduxjs/toolkit";

const dummyAccount = {
    count : 0
}
export const AccountSlice = createSlice({
    name : 'account' ,
    initialState : dummyAccount , 
    reducers : {
        increment : (state)=>{
            state.count+=1
        }, 
        decrement :(state)=>{
            state.count--
        }, 
        incByAmt : (state, action)=>{
            console.log('inside Inc By Amt  Amt is ' , action.payload);
            state.count+=Number(action.payload)
        }
    }
})

export const {incByAmt , increment , decrement} = AccountSlice.actions

export default AccountSlice.reducer