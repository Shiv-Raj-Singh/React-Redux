
//  All Consents Actions 
export const inc = 'account/increment'
export const dec = 'account/decrement'
export const incByAmt = 'account/increment/amount'

//  Action Creators 

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
