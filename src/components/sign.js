import React, { Component } from 'react'
import { Route , BrowserRouter as Router , Switch ,Link ,Redirect} from 'react-router-dom';
import { connect } from 'react-redux'
import * as Actions from "../actions/actions"

import {store} from "../index.js"
 class sign extends Component {
 constructor(props){
     super(props)
     this.state={
         input:"",
         user: null
     }
 }
 handleSelect = (event) => {
    let userTarget = this.props.users.filter(user=>{return user.id == event.target.value})
    this.setState({
        user: userTarget
    })
    
    let btn = document.querySelector(".btn")
    btn.classList.remove("disabled")
 }
 handleLogIn = (event)=>{
    
    store.dispatch(Actions.authUser(this.state.user))
    
 }


    render() {
      
        return (
            <div className="container">
                <div className="row "> 
               
                 
                <div className="column">
                <div className="border">
                <header id="header"> <h4>Welcome to the Would You Rather App!</h4>
                <div>Please sign in to continue</div>
                </header>
                <div className="row ">
                <img src="https://reactnd-would-you-rather.netlify.app/images/avatars/animals.png" className="img"></img>
                 
                </div>
                <h3>Sign in</h3>
                <form>
                <select className="custom-select" onChange={this.handleSelect} >
                    <option defaultValue value="sarahedo" disabled>Open this select menu</option>
                    <option value="null" hidden ></option>
                   {this.props.users.map(user => (<option  key={user.id} value={user.id}>{user.name}</option>))}
                </select> 
       

       <Link className="btn btn-success disabled" onClick={this.handleLogIn} to="/home">Login</Link>
       
      
        </form>

                </div>
                </div>

                </div>
                
                
            </div>
        )
    }
}


const mapStateToProps = ({userReducer,authReducer}) => {
        
    return {users: Object.values(userReducer) , auth:authReducer}
}
  



export default  connect(mapStateToProps)(sign)
