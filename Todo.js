import React, { Component } from 'react'

export default class Todo extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       tel: '0777777777',
       toggle: true,
    }
  }
  

  render() {
    return (
      <div>
        {this.state.tel}
        <h1 onClick={()=> this.setState({toggle: !this.state.toggle})}>{this.state.toggle ? 'LOGIN' : 'LOGOUT'}</h1>
      </div>
    )
  }
}
