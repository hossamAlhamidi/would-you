import React, { Component } from 'react'
import { Route , BrowserRouter as Router , Switch ,Link ,Redirect} from 'react-router-dom';
import {isNull} from "lodash"
import { connect } from 'react-redux'
import Store from "../index"
import * as Actions from "../actions/actions"
import * as UsersAPI from '../_DATA'
import authReducer from '../reducers/authReducer';
import userReducer from '../reducers/userReducer';
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
 }
 handleLogIn = ()=>{
    
    store.dispatch(Actions.authUser(this.state.user))
 }

//  handleLogIn = () => {
//      store.dispatch(Actions.loginUser())
//  }
    render() {
       // console.log(this.props.us,"user")
      //  this.props.users.map(user=>console.log(user))
      console.log(this.props.users,"user from sign")
      console.log( this.props.auth,"auth from sign")
      console.log(isNull(!this.props.auth),"isnull")
      
      //console.log( Object.keys(this.props.us))
     // Object.keys(this.props.us).map(user=>console.log(user))
     let hossam = {
       children:{name:"khaled" ,age:18} , rel:{unkles:{name:"abbas",age:20}}
     }
    //  for(const key of Object.keys(hossam)){
    //    console.log(`${key}=>${hossam[key]}`)
    //  }
    // for(let val in hossam){
    //   for(let val2 in hossam[val]){
    //     console.log(val2,hossam[val][val2])
    //   }
    // }
    // for(let val in this.props.users){
    //     console.log(this.props.users[val])
    //     // for(let val2 in this.props.users[val]){
    //     //     console.log()
    //     // }
    // }
    
    
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
                    <option defaultValue disabled>Open this select menu</option>
                    {/* <option value="null" hidden ></option> */}
                   {this.props.users.map(user => (<option key={user.id} value={user.id}>{user.name}</option>))}
                </select> 
        {/* <input placeholder="enter user name" type="text" value={this.state.input} onChange={this.handleChange}/> */}
       
       {/* <Link to="/home"> <button type="button" class="btn btn-success">Login</button></Link> */}
       {/* {!isNull(this.props.auth)?  
        <Link  to="/home" className="btn btn-success " > Login</Link>
      
          :  <Link  to="/home" className="btn btn-success disabled  " > Login</Link>

       } */}

       <Link className="btn btn-success" onClick={this.handleLogIn} to="/home">Login</Link>
       
      
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
