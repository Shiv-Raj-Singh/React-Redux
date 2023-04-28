// import {createStore , applyMiddleware ,combineReducers } from 'redux';
// // use middleware to see result prev and next state value 
// import logger from 'redux-logger';

// //  Use of Redux-Thunk 
// import thunk from 'redux-thunk';

// //  Create Constant Action  
// const inc = 'increment'
// const dec = 'decrement'
// const incByAmt = 'incrementByAmount'

// // APis Call Action 
// const getUser = 'getUser'

// //    Create Store 
// const store = createStore( combineReducers({
//     user : reducer1 , count : reducer1
// }) , applyMiddleware(logger.default , thunk.default))


// //  Create Reducer
// function reducer1(state={count : 0} ,action ){
//     console.log(action);
//     switch(action.type){
//         case inc:
//             return {count :state.count+1}
//         case dec:
//             return {count :state.count-1}
//         case incByAmt:
//             return {count :state.count + action.payload}
        
//         case getUser:
//             return {user : action.payload}

//         default:
//             return state
//     }
// }



// // To get global state by using getState method 
// // console.log( 'before call any action' , store.getState());

// // invoke the action 

// //  whenever state will update 
// store.subscribe(()=>store.getState())


// //  Use of Action Creator functions 
// function increment(){
//     return {
//         type : inc
//     }
// }

// function decrement(){
//     return {
//         type : dec
//     }
// }

// function incByAmount(value){
//     return {
//         type : incByAmt , payload : value
//     }
// }
// function getUsers(value){
//     return {
//         type :getUser , payload : value
//     }
// }

// //  get User APIs Call 

// // async function getUserByAPIs(){
// //     try {
// //         const response = await fetch(`http://localhost:3000/users`)
// //         const user = await response.json()
// //         console.log(user);  
// //         return {type :getUser , payload : user }    // we can't return object like this by using apis then we have use thunk 
// //     } catch (error) {
// //         console.log(error);  
// //     }
// // }

// // thunk middleware have two parameters dispatch and getState both we can use re-dispatch 
// // async function getUserByAPIs(dispatch , getState){
// //     try {
// //         const response = await fetch(`http://localhost:3000/users`)
// //         const user = await response.json()
// //         // console.log(user);  
// //         dispatch(getUsers(user))
// //         // instead of return an action dispatch a new action 
// //     } catch (error) {
// //         console.log(error);  
// //     }
// // }

// //  now we want to take id for fetch particular user 
// function getUserByAPIs(id){
//     return async (dispatch , getState)=>{
//         try {
//             const response = await fetch(`http://localhost:3000/users/${id}`)
//             const user = await response.json()
//             // console.log(user);  
//             dispatch(getUsers(user))
//             // instead of return an action dispatch a new action 
//         } catch (error) {

//             console.log(error);  
//         }
//     }
// }

// // getUserByAPIs()
// // store.dispatch(getUserByAPIs())  //  without thunk give an error 
// // store.dispatch(getUserByAPIs)  //  with thunk don't need to call the middleware 
// store.dispatch(getUserByAPIs(1))  //  with thunk don't need to call the middleware pass value it will be return middleware 

// // setInterval(()=>{
// //     // store.dispatch(decrement())
// //     // store.dispatch(increment())
// //     store.dispatch(incByAmount(3))
// // } , 5000)






// ************************************************************************************************************************

import {createStore , applyMiddleware ,combineReducers } from 'redux';
// use middleware to see result prev and next state value 
import logger from 'redux-logger';

//  Use of Redux-Thunk 
import thunk from 'redux-thunk';

//  Create Constant Action Along with Reducer Name
const inc = 'countReducer/increment'
const dec = 'countReducer/decrement'
const incByAmt = 'countReducer/incrementByAmount'

// APis Call Action 
const getAllUsers = 'userReducer/getAllUsers'
const getAge = 'userReducer/getUser'
const getUser = 'userReducer/getUserAge'

// Common Action like promise pending fulfilled & Rejected 
const isFulfilled = 'fulfilled'
const isRejected = 'Rejected'
const inPending = 'processing'

//    Create Store 
const store = createStore( combineReducers({
    user : userReducer , count : countReducer
}) , applyMiddleware(logger.default , thunk.default))


//  Create Reducers Multiple Reducers
function countReducer(state = {count : 0} , action){
    switch(action.type){
        case inc:
            return  {count : state.count + 1}
        case dec:
            return  {count : state.count + 1}
        case incByAmt:
            return  {count : state.count + 1}
        default :
            return state
    }
}

function userReducer(state={name :''} , action){
    switch(action.type){
        case getAllUsers:
            return  {users : action.payload}
        case getUser:
            return  {user : action.payload}
        case getAge:
            return  {userAge : action.payload }
        case isFulfilled:
            return {users : action.payload , pending : false}
        case isRejected:
            return {...state , pending : false}
        case inPending:
            return {...state , pending : true}
        default:
            return state
    }
}

//  Use of Action Creator functions 
function increment(){
    return {
        type : inc
    }
}

function decrement(){
    return {
        type : dec
    }
}

function incByAmount(value){
    return {
        type : incByAmt , payload : value
    }
}

//  User Actions 
function getUsers(value){
    return {
        type :getAllUsers , payload : value
    }
}

function getAUser(value){
    return {
        type :getUser , payload : value
    }
}
function getAUserAge(value){
    return {
        type :getAge , payload : value
    }
}

//  Status of Action Creator 
function fulfilled(value){
    return {
        type :isFulfilled , payload : value
    }
}
function Rejected(value){
    return {
        type :isRejected 
    }
}
function Pending(value){
    return {
        type :inPending
    }
}


//  get User APIs Call 

//  now we want to take id for fetch particular user 
function getUserByAPIs(id){
    return async (dispatch , getState)=>{
        try {
            //  Before Api Call we have to dispatch a pending action 
            dispatch(Pending())
            const response = await fetch(`http://localhost:3000/users/${id}`)
            const user = await response.json()
            // console.log(user);  
            dispatch(fulfilled(user))
            // instead of return an action dispatch a new action 
        } catch (error) {
            dispatch(Rejected())
            console.log(error);  
        }
    }
}
// setInterval(()=>{
//     // store.dispatch(decrement())
//     // store.dispatch(increment())
//     // store.dispatch(incByAmount(3))
// } , 5000)

// getUserByAPIs()
// store.dispatch(getUserByAPIs())  //  without thunk give an error 
// store.dispatch(getUserByAPIs)  //  with thunk don't need to call the middleware 

store.dispatch(getUserByAPIs(1))  //  with thunk don't need to call the middleware pass value it will be return middleware 
store.subscribe(()=>console.log( 'final output is ' ,store.getState()))


