import { Switch } from "react-router-dom";
import sign from "../components/sign";
import { Provider, connect } from 'react-redux'
import * as UserAPI from "../_DATA"
import {isNull} from "lodash"
import * as Actions from "../actions/actions"
let users = []
let authUser = null;
  
  export default function authReducer(state = authUser , action)  {
    
    switch (action.type) {
      
      case Actions.AUTH_USER:
        return {
          authUser:action.user
        }
      case Actions.LOGOUT: 
        return null;
           
  
      default:
        return state;
    }
    
  };

  