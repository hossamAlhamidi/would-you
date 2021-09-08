import React, { Component } from 'react'
import Board from "../components/board"
import { connect } from 'react-redux'
import {resUsers} from "./submitAnswerPull"
  class leaderBoard extends Component {
  
    render() {
        console.log(this.props.users,"users from leader board")
      //  console.log(resUsers,"resUsers")
        return (
            <div>
            
             {this.props.users.map(user=> {return ( 
           <div key={user.id} className="container mx-auto border border-secondary">      
       <div  className="row">
        <div className="col-2 ">img</div>
        <div className="col-4"><h5>{user.id} </h5>
        <p>answered question:{Object.values(user.answers).length}</p>
        <p>created question:{Object.values(user.questions).length}</p>
        </div>
        <div className="col-2 border border-danger">Score</div>



        </div>
        </div>
        )})}   
            {/* <div className="row">
        <div className="col-4 ">img</div>
        <div className="col-4">Name
        <p>answered question:</p>
        <p>unanswered question:</p>
        </div>
        <div className="col-2 border border-danger">Score</div>



        </div> */}
            
            
        
        </div>
            
        )
    }
}


const mapStateToProps = (state) => {
        
    return {  
        questions:Object.values(state.questionsReducer),
        user:state.authReducer,
        users: Object.values(state.userReducer)
    }
}

export default connect(mapStateToProps)(leaderBoard)