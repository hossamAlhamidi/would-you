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
       
      console.log(this.props.auth)
        return (
        //   <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        //   <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#MyNav"
        //    aria-controls="MyNav" aria-expanded="false">
        // <span class="navbar-toggler-icon"></span>
        //    </button>
        
        //   <a class="navbar-brand" href="#">nick germain</a>
        
        //   <div class="collapse navbar-collapse" id="MyNav">
        //    <ul class="navbar-nav">
        //     <li class="nav-item"> <a class="nav-link" href="#"> Home </a>  </li>
        //     <li class="nav-item"> <a class="nav-link" href="#"> About </a> </li>
        //       <li class="nav-item"> <a class="nav-link" href="#"> Contact </a> </li>
        //     </ul>
        //    </div>
        //     </nav>

    //       <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container">
    //     <Link to="/" className="navbar-brand">
    //       Home
    //     </Link>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <Link to="/new-poll" className="nav-link">
    //             New Poll
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link to="/leaderboard" className="nav-link">
    //             Leaderboard
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
       
    //   </div>
      
    // </nav>



          <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5 flex-row-reverse">
             { this.props.auth?
          <div className="nav-item  d-flex flex-wrap mx-4 ">
            <span className="navbar-brand my-auto d-flex" style={{fontSize: '1rem', fontWeight:'bold',paddingTop:20}} >{this.props.auth.authUser[0].id}</span>
            <Link to="/" className="nav-link " >
            
             <button  onClick={this.handleLogOut} className = "btn btn-outline-dark logout  ">Logout</button></Link>
           
          </div>
           : console.log("auth not exist in nav")
           } 
            
            <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#MyNav"
           aria-controls="MyNav" aria-expanded="false">
        <span className="navbar-toggler-icon"> </span>  
           </button>
          <div className="collapse navbar-collapse nav-between "  id="MyNav">
          <ul className="navbar-nav mr-auto "> 

          <li className="nav-item px-3"><Link className="nav-link " to="/home">Home</Link></li>
    
          <li className="nav-item px-3 "><Link className="nav-link" to ="/pull">New Pull</Link></li>
          <li className="nav-item px-3"><Link className="nav-link" to ="/board">Leader Board</Link></li>
           {/* { this.props.auth?
          <li className="nav-item ml-auto float-right  "><Link to="/" className="nav-link " ><div className="float-right"><button  onClick={this.handleLogOut} className = "btn btn-outline-dark  ">Logout</button></div></Link></li>
           : console.log("auth not exist in nav")
           } */}
          
  </ul>
  </div>
    {/* { this.props.auth?
          <div className="nav-item  d-flex flex-wrap mx-4 ">
            <span className="navbar-brand my-auto d-flex" style={{fontSize: '1rem', fontWeight:'bold',paddingTop:20}} >{this.props.auth.authUser[0].id}</span>
            <Link to="/" className="nav-link " >
            
             <button  onClick={this.handleLogOut} className = "btn btn-outline-dark logout  ">Logout</button></Link>
           
          </div>
           : console.log("auth not exist in nav")
           }  */}
  
  
   </nav>

//            <ul className="nav nav-tabs">

//         <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/home">Home</Link></li>
  
//         <li className="nav-item  px-5"><Link className="nav-link py-3 px-0 px-lg-3 rounded" to ="/pull">New Pull</Link></li>
//         <li className="nav-item px-2"><Link className="nav-link py-3 px-0 px-lg-3 rounded" to ="/board">Leader Board</Link></li>
//          { this.props.auth?
//         <li className="nav-item  px-2"><Link to="/" className="nav-link py-3 px-0 px-lg-3 rounded" ><button  onClick={this.handleLogOut} className = "btn btn-warning">Logout</button></Link></li>
//          : console.log("auth not exist in nav")
//          }
        
// </ul>

        
        )
    }
}
const mapStateToProps = state =>{
    return { auth:state.authReducer , }
  }
  export default connect(mapStateToProps)(navbar)