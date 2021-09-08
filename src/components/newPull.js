import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as UsersAPI from '../_DATA'
import { Route , BrowserRouter as Router , Switch ,Link ,Redirect} from 'react-router-dom';
import { ThemeProvider } from 'react-bootstrap';
import {store} from "../index"
import * as Actions from "../actions/actions";
 class newPull extends Component {
    constructor(props){
      super(props);
      this.state={
        response:"",
        optionOne:"",
        optionTwo:""
      }
    }

    handleInput = async(event)=>{
     await this.setState({ [event.target.name]: event.target.value})
    
     if(this.state.optionOne !="" && this.state.optionTwo !=""){
       let btn = document.querySelector("#btn-pull")
       btn.classList.toggle("disabled")

     }
    }

  handleSubmit = async()=>{
    

   let question={
     author:this.props.user.authUser[0].id,
     optionOneText:this.state.optionOne,
     optionTwoText:this.state.optionTwo
   }
  //  UsersAPI._saveQuestion(question).then(res=>{
     
     
  //   store.dispatch(Actions.createQuestions(res.formattedQuestion)
    
  //   )})
  //   store.dispatch(Actions.getUsers(this.props.users))

   await UsersAPI._saveQuestion(question).then((res)=>{
      this.setState({response:res})
    })
    store.dispatch(Actions.createQuestions(this.state.response.formattedQuestion))
    store.dispatch(Actions.getUsers(this.state.response.users))
  }
    render() {
      console.log(this.props.questions,"questions from pull")
      console.log(this.props.users,"users from pull")
        return (
            <div className="card mx-auto col-6">
            <div className="card-header">
              <h3> Create New Pull</h3> 
              </div>
                <div className="card-body">
                    <p>complete this question:</p>
                  <h4 className="card-title">Would you rather</h4>
                  <form>
                  <input name="optionOne" className="form-control" type="text" placeholder="Enter option one" onChange={this.handleInput}/> 
                  <h3>OR</h3>
                  <input name="optionTwo" className="form-control" type="text" placeholder="Enter option two " onChange={this.handleInput}></input>
                  <button onClick={this.handleSubmit} type="button" id="btn-pull" className="btn btn-primary btn-lg disabled">Submit</button>
                  </form>
                </div>
          </div>

        )
    }
}

const mapStateToProps = (state)=>{
  return {
     questions:Object.values(state.questionsReducer),user:state.authReducer,
     users:state.userReducer
  }
 }

 export default connect(mapStateToProps)(newPull)