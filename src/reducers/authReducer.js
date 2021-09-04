import { Switch } from "react-router-dom";
import sign from "../components/sign";
import { Provider, connect } from 'react-redux'
import * as UserAPI from "../_DATA"
import * as Actions from "../actions/actions"
let users = []
const defaultState = {
    authenticated: false,
    
    

  };
  let getData = async()=>{
    await UserAPI._getUsers().then(res=>{
          
      for(let val in res){
      // if(typeof res[val["id"]]=="undefined") {console.log("ee")}
        try{
       users = res[val]
       console.log(users,"users")
        }
        catch(err){alert("erro")}
      }
     })
  }
  
  export default function authReducer(state = defaultState, action)  {
    
    switch (action.type) {
      case Actions.LOGIN:{
        //  console.log(action.users.sarahedo.id,"user from reducer")
        //  for(let val in action.users){
        //      for(let val2 in action.users[val]){
        //        if(val2=="id"){}
        //        return Object.assign({},defaultState,{user:action.users[val]})
        //      }
        //  }
        
        
        let found = false;
        //  if(action.user.id == "sarahedo")
         UserAPI._getUsers().then(res=>{
          
          for(let val in res){
          // if(typeof res[val["id"]]=="undefined") {console.log("ee")}
            try{
           if(res[val]["id"]==action.user.id){getData();console.log(users,"users") ;return Object.assign({},defaultState,{authenticated:true}) }
            }
            catch(err){alert("erro")}
          }
         })
         console.log(found,"found")
       // return Object.assign({},defaultState,{authenticated:true})
       // console.log(typeof action.user,"user id  from auth reducer")
      
        
        
      }
           
        
  
      case Actions.LOGOUT:
        return {
          authenticated: false
        };
  
      default:
        return defaultState;
    }
    
  };

  