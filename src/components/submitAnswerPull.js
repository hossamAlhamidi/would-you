import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route , BrowserRouter as Router , Switch ,Link ,Redirect} from 'react-router-dom';
import {isNull} from "lodash"
import * as UsersAPI from '../_DATA'
import {store} from "../index"
 class submitAnswerPull extends Component {
     constructor(props){
         super(props)
         this.state ={
             answer:""
         }
     }

    handleRadio = (event)=>{
        let btn = document.querySelector(".answer")
        btn.classList.remove("disabled")
        this.setState({answer:event.target.value})
       
    }

    handleSubmit = (event)=>{
       console.log(this.state.answer,"event")
     let arr =  this.props.questions.filter(question=>{
           return question.optionOne.text == this.state.answer ||  question.optionTwo.text == this.state.answer
        
        })
        console.log(arr[0],"arr")
    }
    render() {
        return (
            <div>
              {this.props.questions.map((question)=>{return (<div  key={question.id}>
               <Route path={`/${question.id}`}>
             {!isNull(this.props.auth)?
               <div>
               <h6 className="card-header ">{question.author} asks:</h6>
          <div className="card-body">
          <h4 className="card-title">Would you Rather</h4>
                    <from className="form-check" onChange={this.handleRadio}>
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value={`${question.optionOne.text}`} />
            <label className="form-check-label" >
             {question.optionOne.text}
            </label>
          
          <div >
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value={`${question.optionTwo.text}`}  />
            <label className="form-check-label" >
            {question.optionTwo.text}
            </label>
          </div>
          </from>
          <Link className="btn btn-primary w-25 disabled answer " onClick={this.handleSubmit} to={`/result/${question.id}`} >Submit</Link>
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
    return { auth:state.authReducer , questions:Object.values(state.questionsReducer)}
  }

  export default connect(mapStateToProps)(submitAnswerPull)