import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as UsersAPI from '../_DATA'
import { Route , BrowserRouter as Router , Switch ,Link ,Redirect} from 'react-router-dom';
 class card extends Component {

  handleAnswerPull = (event)=>{
    // <Redirect to="/"/>
  }

  componentDidMount(){
   // UsersAPI._getQuestions().then(res=>console.log(res,"from card"))
  }
    render() {
      console.log(this.props.questions,"questions from card")
        return (
        
            <div >
               {
                this.props.questions.map((question)=> {return (<div key={question.id} className="card mb-5">
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
    questions:Object.values(state.questionsReducer)
 }
}
export default connect(mapStateToProps)(card)