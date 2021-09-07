
import * as Actions from "../actions/actions";
export default function(state={},action){
  switch(action.type){
      case Actions.REC_Q:{
          console.log(action,"action")
          return{...state,...action.questions}
      }

      case Actions.SUBMIT_Q:{
          
      }
      default:return state;
  }
}