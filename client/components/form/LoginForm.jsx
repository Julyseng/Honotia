import React, { Component } from 'react'
import { isAuthenticated, signIn } from 'authenticare/client'

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

  handleSubmit = e => {
    e.preventDefault()
    signIn(
      {
        username: this.state.email,
        password: this.state.password
      },
      {
        baseUrl: '/api/v1'
      }
    ).then(token => {
      if (isAuthenticated()) {
        this.props.finishLogin()
      }
    })
  }

  render() {
    return (
      <div className='login-container z-depth-1'>
        <form onSubmit={this.handleSubmit}>
          <div className='input-field login-input'>
            <i class='material-icons prefix'>account_circle</i>
            <input
              id='email'
              type='email'
              className='validate'
              value={this.state.email}
              onChange={this.handleInput}
            />
            <label htmlFor='email'>Email</label>
          </div>
          <div className='input-field login-input'>
            <i class='material-icons prefix'>lock</i>
            <input
              id='password'
              type='password'
              className='validate'
              value={this.state.password}
              onChange={this.handleInput}
            />
            <label htmlFor='password'>Password</label>
          </div>
          <button
            className='btn waves-effect waves-light btn-login'
            type='submit'
            name='action'
          >
            Login
            <i className='material-icons right'>send</i>
          </button>
        </form>
      </div>
    )
  }
}
