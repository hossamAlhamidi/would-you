import React, { Component } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Provider, connect } from 'react-redux'
import Sign from "./components/sign"
import Navbar from "./components/navbar"
import Home from "./components/home"
import NewPull from "./components/newPull"
import Leader from "./components/leaderBoard"
import Board from "./components/board"
import { Route , BrowserRouter as Router , Switch ,Link ,Redirect} from 'react-router-dom';
import * as UsersAPI from './_DATA'
import {store} from "./index"
import * as Actions from "./actions/actions"
import {isNull} from "lodash"
 class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      users:[]
    }
  }
  componentDidMount(){
    UsersAPI._getUsers().then(res=>{
     //const temp = []
     //temp.push(res)
     
     //  this.setState({users:temp})
      //console.log( this.state.users,"state")
      // for(let val in res){
      //   for(let val2 in res[val]){
      //     if(val2=="id")
      //     store.dispatch(Actions.loginUser(res[val]["id"]))
      //   }
      // }
      store.dispatch(Actions.getUsers(res))
    //  store.dispatch(Actions.loginUser())
     
     
    })
  }
  
  
  render() {
    
    return (
      
      <Router>
        
      <div>
      <Navbar/>
       <Switch>
         
       <Route path="/" exact>
         <Sign  />
       </Route>

        
       <Route path="/home" >
         {
       !isNull(this.props.auth)?
        <Home/> : <Redirect to="/"/> }
        </Route>
        

       <Route path="/pull">
      { !isNull(this.props.auth)?
         <NewPull/> :
           <Redirect to="/"/>}
       </Route>  

       <Route path="/board">
       { !isNull(this.props.auth)?
         <Leader/> : <Redirect to="/"/>}

       </Route>
       
       </Switch> 
      </div>
      </Router>
    )
  }
}
const mapStateToProps = state =>{
  return { auth:state.authReducer}
}

export default connect(mapStateToProps)(App)