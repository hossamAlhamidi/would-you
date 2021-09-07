import React, { Component } from 'react'
import { Route , BrowserRouter as Router , Switch ,Link ,Redirect} from 'react-router-dom';
import {store} from "../index.js"
import * as Actions from "../actions/actions"
import {isNull} from "lodash"
import { connect } from 'react-redux'
 class navbar extends Component {

    handleLogOut = ()=>{
        store.dispatch(Actions.logoutUser())
      // return <Redirect to="/home" exact/>
    }
    render() {
       
       
        return (
           <ul className="nav nav-tabs">

        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/home">Home</Link></li>
  
        <li className="nav-item  px-5"><Link className="nav-link py-3 px-0 px-lg-3 rounded" to ="/pull">New Pull</Link></li>
        <li className="nav-item px-2"><Link className="nav-link py-3 px-0 px-lg-3 rounded" to ="/board">Leader Board</Link></li>
         { this.props.auth?
        <li className="nav-item  px-2"><Link to="/" className="nav-link py-3 px-0 px-lg-3 rounded" ><button  onClick={this.handleLogOut} className = "btn btn-warning">Logout</button></Link></li>
         : console.log("auth not exist in nav")
         }
         {/* { !isNull(this.props.auth)?
        <li className="nav-item  px-2"><Link to="/" className="nav-link py-3 px-0 px-lg-3 rounded" ><button  onClick={this.handleLogOut} className = "btn btn-warning">Logout</button></Link></li>
         : ""
         } */}
</ul>

        
        )
    }
}
const mapStateToProps = state =>{
    return { auth:state.authReducer }
  }
  export default connect(mapStateToProps)(navbar)