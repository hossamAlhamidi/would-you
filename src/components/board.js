import React, { Component } from 'react'

export default class board extends Component {
    render() {
        return (
            <div className="container mx-auto border border-secondary">
                
            <div className="row">
        <div className="col-4 ">img</div>
        <div className="col-4">Name
        <p>answered question:</p>
        <p>unanswered question:</p>
        </div>
        <div className="col-2 border border-danger">Score</div>



        </div>
            
            
        </div>
        )
    }
}
