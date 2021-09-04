import React, { Component } from 'react'
import {Link} from "react-router-dom"
import { Provider, connect } from 'react-redux'
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
         input:""
     }
 }
 handleChange = async (event)=>{
    await this.setState({input:event.target.value})
    store.dispatch(Actions.loginUser(this.props.users[this.state.input]))
 }

//  handleLogIn = () => {
//      store.dispatch(Actions.loginUser())
//  }
    render() {
       // console.log(this.props.us,"user")
      //  this.props.users.map(user=>console.log(user))
      console.log(this.props.users,"user from sign")
      console.log(this.props.auth,"auth from sign")
      
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
                <img src="	https://reactnd-would-you-rather.netlify.app/images/avatars/animals.png" className="img"></img>
                 
                </div>
                <h3>Sign in</h3>
                <form>
                {/* <select class="custom-select">
                 <option selected>Open this select menu</option>
                <option value="sarahedo">One</option>
                 <option value="2">Two</option>
                 <option value="3">Three</option>
        </select> */}
        <input placeholder="enter user name" type="text" value={this.state.input} onChange={this.handleChange}/>
       
       {/* <Link to="/home"> <button type="button" class="btn btn-success">Login</button></Link> */}
       <Link to="/home" className="btn btn-success" > Login</Link>
       
      
        </form>

                </div>
                </div>

                </div>
                
                
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {users:state.userReducer , auth:state.authReducer.authenticated}
}
  



export default  connect(mapStateToProps)(sign)
