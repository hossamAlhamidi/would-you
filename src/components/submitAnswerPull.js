import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route , BrowserRouter as Router , Switch ,Link ,Redirect} from 'react-router-dom';
import {isNull} from "lodash"
import * as UsersAPI from '../_DATA'
import {store} from "../index"
import * as Actions from "../actions/actions";

 class submitAnswerPull extends Component {
     constructor(props){
         super(props)
         this.state ={
            
             option:"",
             submitQuestion:"",
             id:""
         }
     }
     

    handleRadio = async (event)=>{
        let btn = document.querySelector(".answer")
        btn.classList.remove("disabled")
     await   this.setState({
          id:event.target.value,
          option:event.target.id
        })
        
       
    }

    handleSubmit = async (event)=>{
      
    
    let arr = this.props.questions.filter(question=>{return question.id == this.state.id})
       
        
       await UsersAPI._saveQuestionAnswer({authedUser:this.props.user.authUser[0].id,qid:arr[0].id,answer:this.state.option}).
        then( res=>{this.setState({submitQuestion:res})})
       // console.log(this.state.submitQuestion.questions,this.state,this.state.submitQuestion.users,"res from anserpull")
       store.dispatch(Actions.receiveQuestions(this.state.submitQuestion.questions))
       store.dispatch(Actions.getUsers(this.state.submitQuestion.users))
        
       
        
   
    }
    
    render() {
       console.log(this.props.questions,"questions from submit")
       console.log(this.state.submitQuestion.users,"users from leader board")
       
        return (
            <div>
              {this.props.questions.map((question)=>{return (<div  key={question.id}>
               <Route path={`/${question.id}`}>
             {!isNull(this.props.auth)?
               <div>
               <h6 className="card-header ">{question.author} asks:</h6>
          <div className="card-body">
          <h4 className="card-title">Would you Rather</h4>
                    <form className="form-check" onChange={this.handleRadio}>
            <input className="form-check-input" type="radio" name="option" id="optionOne" value={`${question.id}`} />
            <label className="form-check-label" >
             {question.optionOne.text}
            </label>
          
          <div >
            <input className="form-check-input" type="radio" name="option" id="optionTwo" value={`${question.id}`}  />
            <label className="form-check-label" >
            {question.optionTwo.text}
            </label>
          </div>
          <Link className="btn btn-primary w-25 disabled answer " onClick={this.handleSubmit} to={`/result/${question.id}`} >Submit</Link>
          </form>
          
          </div>
             </div> :  <Redirect to="/"/>
         }
               </Route>


              </div>

              
              )})
              
              
              
              }
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return { auth:state.authReducer , questions:Object.values(state.questionsReducer),user:state.authReducer}
  }
  
  export default connect(mapStateToProps)(submitAnswerPull)