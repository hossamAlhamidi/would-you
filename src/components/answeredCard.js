import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route , BrowserRouter as Router , Switch ,Link ,Redirect} from 'react-router-dom';
 class answeredCard extends Component {

  
    render() {
      
        return (
        
            <div >
               {
                this.props.questions.filter(question=> question.optionOne.votes.includes(this.props.user.authUser[0].id)||
                question.optionTwo.votes.includes(this.props.user.authUser[0].id))
                .map((question)=> {return (<div key={question.id} className="card mb-5">
                 <h6 className="card-header ">{question.author} asks:</h6>
  <div className="card-body">
    <h4 className="card-title">Would you Rather</h4>
    <p className="card-text">{question.optionOne.text}<br/>or...</p>
    <Link className="btn btn-success "  to={`/result/${question.id}`} >Result</Link>
  </div> 

                </div>) }) 
                
                }
 
</div>

        )
    }
}

const mapStateToProps = (state)=>{
 return {
    questions:Object.values(state.questionsReducer),user:state.authReducer
 }
}
export default connect(mapStateToProps)(answeredCard)