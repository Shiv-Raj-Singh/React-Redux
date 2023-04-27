// import {createStore , applyMiddleware} from 'redux';
// import logger from 'redux-logger';

// const store = createStore(reducer , applyMiddleware(logger.default) )

// //  Create Reducer 

// function reducer(state={count : 0} ,action ){
//     switch(action.type){
//         case 'increment':
//             return {count :state.count+1}
//         case 'decrement':
//             return {count :state.count-1}
//         case 'incByAmount':
//             return {count :state.count + action.payload}
//         default:
//             return state
//     }
// }

// //    To get global state by using getState method 
// console.log( 'before call any action' , store.getState());

// //  invoke the action 

// //  whenever state will update 
// store.subscribe(()=>store.getState())

//  invoke the action over & over again 

// setInterval(()=>{
//     // store.dispatch({type : 'increment'})
//     // store.dispatch({type : 'decrement'})
//     store.dispatch({type : 'incByAmount' , payload : 10})
// } , 5000)


// ((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((()))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))

// Use of Action Creator functions 

// function increment(){
//     return {
//         type : 'increment'
//     }
// }

// function decrement(){
//     return {
//         type : 'decrement'
//     }
// }
// function incByAmount(value){
//     return {
//         type : 'incByAmount' , payload : value
//     }
// }


// setInterval(()=>{
//     // store.dispatch(decrement())
//     // store.dispatch(increment())
//     store.dispatch(incByAmount(3))
// } , 5000)


// ((((((((((((((((((((((((((((((((((((((((((((((((((((((((((()))))))))))))))))))))))))))))))))))))))))))))))))))))))))))


import {createStore , applyMiddleware} from 'redux';
// use middleware to see result prev and next state value 
import logger from 'redux-logger';

//  Create Constant Action  

const inc = 'increment'
const dec = 'decrement'
const incByAmt = 'incrementByAmount'

//    Create Store 
const store = createStore(reducer , applyMiddleware(logger.default) )


//  Create Reducer 

function reducer(state={count : 0} ,action ){
    switch(action.type){
        case inc:
            return {count :state.count+1}
        case dec:
            return {count :state.count-1}
        case incByAmt:
            return {count :state.count + action.payload}
        default:
            return state
    }
}

//    To get global state by using getState method 
console.log( 'before call any action' , store.getState());

//  invoke the action 

//  whenever state will update 
store.subscribe(()=>store.getState())


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


setInterval(()=>{
    // store.dispatch(decrement())
    // store.dispatch(increment())
    store.dispatch(incByAmount(3))
} , 5000)
