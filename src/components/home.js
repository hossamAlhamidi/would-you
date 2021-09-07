import React, { Component } from 'react'
import Card from "../components/card"
import {Link} from "react-router-dom"
export default class newPull extends Component {
  constructor(props){
    super(props)
    this.state = {
      tap:""
    }
  }
  toggleTap = (event)=>{
    console.log(event.target.id)
    this.setState({tap:event.target.id})
  }
  render() {
    return (
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card text-center ">
                <ol className="card-header navbar nav nav-taps " onClick={this.toggleTap}>
                  {/* <li><a className="text-dark " datatoggle ="tab" href="#">unAnswered</a></li>
                  <li><a  className="text-dark" datatoggle ="tab"href="#">Answered</a></li> */}
                    <li className="nav-item"> <a id="1" className="nav-link text-dark " href="#unAnswered" data-toggle ="tab"> unAnswered </a> </li>
      <li className="nav-item"> <a id="2" className="nav-link text-dark" href="#Answered" data-toggle ="tab"> Answered </a> </li>
                </ol>
                <div className="tap-content">
                 { this.state.tap==1?(
              <div className="card-body tap-pane" id="unAnswered" role="tabpanel">
                <Card/>
               
              </div >)
              :(
              <div className="card-body tap-pane" id="Answered" role="tabpanel"> hello</div>)}
              </div>
                 

            </div>
          </div>  
        </div>      
      </div>
    )
  }
}
