import React, { Component } from 'react'
import { connect } from 'react-redux'

  class leaderBoard extends Component {
  
    render() {
        console.log(this.props.users,"users from leader board")
       //console.log(Object.values(user.answers).length,"length answer")
        return (
            <div>
            
             {this.props.users.map(user=> {return ( 
    //        <div key={user.id} className="container mx-auto border border-secondary">      
    //    <div  className="row">
    //     <div className="col-2 ">{<img src={user.avatarURL}></img>}</div>
    //     <div className="col-4"><h5>{user.id} </h5>
    //     <p>answered question:{Object.values(user.answers).length}</p>
    //     <p>created question:{Object.values(user.questions).length}</p>
    //     </div>
    //     <div className="col-2 border border-danger">{Object.values(user.answers).length +Object.values(user.questions).length }</div>



    //     </div>
    //     </div>
        
       //
       <div key={user.id} className="d-flex flex-column mx-auto col-md-6 col-sm border my-5" >
       <header className="h6 text-center p-2 head-style border-bottom border-danger">
           <h6>{user.id}</h6>
       </header>
       <div className="body d-flex flex-row align-items-center justify-content-around p-2 flex-wrap ">
           <img className="border-right px-1" src={user.avatarURL} style={{width: 100}} alt={""} />
           <div className="question">
               <p className="mt-1 border-bottom">Answered questions <span className="p-3 pt-0 "> {Object.values(user.answers).length}</span></p>
               <p className="mt-1">Created questions <span className="p-3 pt-0 pb-0"> {Object.values(user.questions).length}</span></p>
           </div>
           <div className="score border text-center rounded  p-3 pt-2 pb-2">
               <p>Score</p>
               <p className="rounded-circle p-1 text-white bg-success">{Object.values(user.answers).length +Object.values(user.questions).length}</p>
           </div>
       </div>
   </div>
       //

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