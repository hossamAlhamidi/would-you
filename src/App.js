import React, { Component } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Provider, connect } from 'react-redux'
import Sign from "./components/sign"
import Navbar from "./components/navbar"
import Home from "./components/home"
import NewPull from "./components/newPull"
import Leader from "./components/leaderBoard"
import Board from "./components/board"
import { Route , BrowserRouter as Router , Switch ,Link} from 'react-router-dom';
import * as UsersAPI from './_DATA'
import {store} from "./index"
import * as Actions from "./actions/actions"

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
    console.log(this.props.auth,"auth from app")
    return (
      
      <Router>
        
      <div>
      
       <Switch>
         
         
         
       <Route path="/home" >
       <Navbar/>
        <Home/>
       </Route>

       <Route path="/pull">
       <Navbar/>
         <NewPull/>

       </Route>

       <Route path="/board">
       <Navbar/>
         <Leader/>

       </Route>
       <Route path="/">
         <Sign  />
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

export default App