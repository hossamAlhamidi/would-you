import React, { Component } from 'react'
import Card from "../components/card"
import {Link} from "react-router-dom"
export default class newPull extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
                <ol className="card-header navbar">
                  <li>Answered</li>
                  <li><a href="#">unAnswered</a></li>
                </ol>
              <div className="card-body">
                <Card/>
                <Card/>
              </div>
            </div>
          </div>  
        </div>      
      </div>
    )
  }
}
