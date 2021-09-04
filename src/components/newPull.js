import React, { Component } from 'react'

export default class newPull extends Component {
    render() {
        return (
            <div class="card mx-auto col-6">
  <div class="card-header">
<h3> Create New Pull</h3> 
 </div>
  <div class="card-body">
      <p>complete this question:</p>
    <h4 class="card-title">Would you rather</h4>
    <form>
    <input class="form-control" type="text" placeholder="Default input"/> 
    <h3>OR</h3>
    <input class="form-control" type="text" placeholder="Default input"></input>
    <button type="button" class="btn btn-primary btn-lg">Submit</button>
    </form>
  </div>
</div>

        )
    }
}
