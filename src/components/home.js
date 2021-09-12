import React, { Component } from 'react'
import Card from "../components/card"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import AnsweredCard from './answeredCard'
 class home extends Component {
  constructor(props){
    super(props)
    this.state = {
      tap:""
    }
  }
  toggleTap = (event)=>{
    
    this.setState({tap:event.target.id})
  }
  
  
  render() {
    console.log(this.props.questions,"questions from home")
    return (
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card text-center ">
                <div className="   nav-taps row w-100 h-100  border-dark " onClick={this.toggleTap}>
                 
                     <a id="1" className="nav-link text-white   btn btn-dark  col-6 my-0" href="#unAnswered" data-toggle ="tab"> Unanswered </a> 
      <a id="2" className="nav-link text-white  btn btn-dark  col-6 my-0 " href="#Answered" data-toggle ="tab"> Answered </a> 
                </div>
                <div className="tap-content">
                 { this.state.tap==2?( <div className="card-body tap-pane" id="Answered" role="tabpanel"><AnsweredCard/></div>)
              :(
            
              
                <div className="card-body tap-pane" id="unAnswered" role="tabpanel">
                  <Card/>
                 
                </div >
              
              )}
              </div>
                 

            </div>
          </div>  
        </div>      
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
     questions:Object.values(state.questionsReducer),user:state.userReducer
  }
 }
export default connect(mapStateToProps)(home)