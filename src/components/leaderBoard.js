import React, { Component } from 'react'
import Board from "../components/board"
import { connect } from 'react-redux'
  class leaderBoard extends Component {
  
    render() {
        
        return (
            <div> <Board/>  <Board/>  <Board/></div>
          
            
        )
    }
}


const mapStateToProps = ({userReducer,authReducer}) => {
        
    return { auth:authReducer}
}

export default connect(mapStateToProps)(leaderBoard)