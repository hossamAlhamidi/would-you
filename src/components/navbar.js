import React, { Component } from 'react'
import { Link} from 'react-router-dom';
export default class navbar extends Component {
    render() {
        return (
           <ul className="nav nav-tabs">

<li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/home">Home</Link></li>
  {/*<li className="nav-item col-3">
    <a className="nav-link" href="#!">Leader Board</a>
        </li>*/}
        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded" to ="/pull">New Pull</Link></li>
        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded" to ="/board">Leader Board</Link></li>
        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded" to ="/"><button className = "btn btn-warning">Logout</button></Link></li>
</ul>

        
        )
    }
}
