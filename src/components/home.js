import React, { Component } from 'react'
import Card from "../components/card"
import {Link} from "react-router-dom"
export default class newPull extends Component {
    render() {
        return (
          
          <div class="container">
          <div class="row">
            <div class="col">
            <div class="card">
  <ol class="card-header navbar">
    <li><Link>Answered</Link></li>
    <li><a href="#">unAnswered</a></li>
  </ol>
  <div class="card-body">
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
