
//  All Consents Actions 
export const inc = 'account/increment'
export const dec = 'account/decrement'
export const incByAmt = 'account/increment/amount'


//  All Users Actions 
export const update = 'users/update'
export const register = 'users/register'

// Promise Status 
export const rejected = 'users/error'
export const pending = 'users/pending'
export const successful = 'users/successful'

//  Action Creators 

// Counter App 
export const increment = ()=>{
    return {
        type : inc
    }
}
export const decrement = ()=>{
    return {
        type : dec
    }
}

export const incrementByAmount = (n)=>{
    return {
        type : incByAmt , payload : n
    }
}

//  User Action Creators 
export const onUpdate = (name , value)=>{
    return {
        type : update , payload : value , field : name
    }
}
export const pendingStatus = (name , value)=>{
    return {
        type : pending 
    }
}
export const errorStatus = (error)=>{
    return {
        type : rejected , payload : error
    }
}
export const successfulResponse = (user)=>{
    return {
        type : successful , payload : user
    }
}


export const onRegister =(user)=>{
    return async (dispatch , getState)=>{
        try {
            dispatch(pendingStatus())
            console.log('inside register ' , user);
            // const data = await axios.post('localhost:3000' , user)
            // dispatch(successfulResponse(data.data))
        } catch (err) {
            dispatch(errorStatus(err.message))
        }
    }   
}
