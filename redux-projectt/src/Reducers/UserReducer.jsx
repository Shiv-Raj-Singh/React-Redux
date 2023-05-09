import { pending, rejected, update , successful } from "../Actions"



const initState = {
    name : '' , email : '' , phone : '' , age : ''
}

export default function UserReducer(state=initState , action ) {

    switch(action.type){
        case update:
            return { ...state , [action.field] : action.payload  }
        case pending:
            return { ...state , pending : true }
        case rejected:
            return { ...state , pending : false , error : action.payload }
            case successful:
            return { ...state , pending : false , ...action.payload }
        default:
            return state
    }
}