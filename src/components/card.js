import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  BrowserRouter as Router  ,Link ,Redirect} from 'react-router-dom';
 class card extends Component {

 
    render() {
       console.log(this.props.questions[0],"questions from card")
      // console.log(this.props.user.authUser[0].id,"user id from card")
      // console.log(this.props.user,"user from card")
     
        return (
        
            <div >
               {
                 this.props.questions.filter(question=> !question.optionOne.votes.includes(this.props.user.authUser[0].id)&&
               ! question.optionTwo.votes.includes(this.props.user.authUser[0].id))
                .map((question)=> {return (<div key={question.id} className="card mb-5">
                 <h6 className="card-header ">{question.author} asks:</h6>
  <div className="card-body">
    <h4 className="card-title">Would you Rather</h4>
    <p className="card-text">{question.optionOne.text}<br/>or...</p>
    <Link className="btn btn-success "  to={`${question.id}`} >Answer Pull</Link>
  </div> 

                </div>) }) 
                
                }
  {/* <h3 className="card-header">Featured</h3>
  <div className="card-body">
    <h4 className="card-title">Would you Rather</h4>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#!" className="btn btn-primary">Answer Pull</a>
  </div> */}
</div>

        )
    }
}

const mapStateToProps = (state)=>{
 return {
    questions:Object.values(state.questionsReducer),user:state.authReducer
 }
}
export default connect(mapStateToProps)(card)