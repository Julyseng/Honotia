import React, { Component } from 'react'

export default class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleInput = e => {
    let { type, value } = e.target
    this.setState({
      [type]: value
    })
  }

  render() {
    return (
      <div className='row'>
        <form className='col s12 m5 l4'>
          <div className='row'>
            <div className='input-field col s12'>
              <input
                id='email'
                type='email'
                className='validate'
                value={this.state.email}
                onChange={this.handleInput}
              />
              <label htmlFor='email'>Email</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <input
                id='password'
                type='password'
                className='validate'
                value={this.state.password}
                onChange={this.handleInput}
              />
              <label htmlFor='password'>Password</label>
            </div>
          </div>
          <button
            className='btn waves-effect waves-light'
            type='submit'
            name='action'
          >
            Submit
            <i className='material-icons right'>send</i>
          </button>
        </form>
      </div>
    )
  }
}