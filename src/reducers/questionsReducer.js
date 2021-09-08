
import * as Actions from "../actions/actions";
export default function(state={},action){
  switch(action.type){
      case Actions.REC_Q:{
        
          return{...action.questions}
      }

      case Actions.CREATE_Q:{
          return {...state , questions:action.questions}
      }
      default:return state;
  }
}