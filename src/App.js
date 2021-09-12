import React, { Component } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {  connect } from 'react-redux'
import Sign from "./components/sign"
import Navbar from "./components/navbar"
import Home from "./components/home"
import NewPull from "./components/newPull"
import Leader from "./components/leaderBoard"
import Board from "./components/board"
import SubmitAnswerPull from "./components/submitAnswerPull"
import { Route , BrowserRouter as Router , Switch ,Link ,Redirect} from 'react-router-dom';
import * as UsersAPI from './_DATA'
import {store} from "./index"
import * as Actions from "./actions/actions"
import {isNull} from "lodash"
 class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      users:[]
    }
  }
  componentDidMount(){
    UsersAPI._getUsers().then(res=>{
     
      
      store.dispatch(Actions.getUsers(res))
    
     
     
    })

    UsersAPI._getQuestions().then(res=> store.dispatch(Actions.receiveQuestions(res)))
   
  }
  
  
  render() {
    
    return (
      
              <Router>
                
              <div>
                { !isNull(this.props.auth)?
              <Navbar/>:""
              }
              <Switch>
                
              <Route path="/" exact>
                <Sign  />
              </Route>

                
              <Route path="/home" >
                {
              !isNull(this.props.auth)?
                <Home/> : <Redirect to="/"/> }
                </Route>
                

              <Route path="/pull">
              { !isNull(this.props.auth)?
                <NewPull/> :
                  <Redirect to="/"/>}
              </Route>  

               <Route path="/board">
              { !isNull(this.props.auth)?
                <Leader/> : <Redirect to="/"/>}
              </Route>

              {/* {this.props.questions.map((question)=>{return (<div className="card mb-5" key={question.id}>
               <Route path={`/${question.id}`}>
             {!isNull(this.props.auth)?
               <div>
               <h6 className="card-header ">{question.author} asks:</h6>
          <div className="card-body">
          <h4 className="card-title">Would you Rather</h4>
                    <div className="form-check">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
            <label className="form-check-label" for="exampleRadios1">
             {question.optionOne.text}
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
            <label className="form-check-label" for="exampleRadios1">
            {question.optionTwo.text}
            </label>
          </div>
          </div>
             </div> :  <Redirect to="/"/>
         }
               </Route>


              </div>

              
              )})
              
              
              
              } */}
              <Route > <SubmitAnswerPull/></Route>
              
              
              </Switch> 
              </div>
              </Router>
            )
          }
        }
const mapStateToProps = state =>{
  return { auth:state.authReducer , questions:Object.values(state.questionsReducer)}
}


export default connect(mapStateToProps)(App)