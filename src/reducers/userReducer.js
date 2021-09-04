import * as UserAPI from "../_DATA";
import * as Actions from "../actions/actions";

export default function userReducer(state =[] ,action){
    switch(action.type){
        case Actions.GETUSERS: {
           return Object.assign({},action.users)
           }
           default: return state
    }
    
}