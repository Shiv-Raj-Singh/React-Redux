import { dec , inc , incByAmt } from "../Actions"



export default function Reducer(state={count:0} , action){
    switch(action.type){
      case inc:
        return {count : state.count+1}
      case dec :
        return {count  : state.count-1}
      case incByAmt :
        return {count  : +(state.count) + +(action.payload)}
      default :
        return state
    } 
}
