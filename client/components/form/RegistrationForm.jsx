import React, { Component, Fragment } from 'react'
import { register, isAuthenticated, getDecodedToken } from 'authenticare/client'
import M from '../../materialize-js/bin/materialize'

import { postUserInfo } from '../../apiClient'

class RegistrationForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
      DOB: '',
      // languages: '',
      // location: '',
      occupation: '',
      interests: '',
      support: '',
      bio: '',
      value: event.target.value
    }
  }

  componentDidMount() {
    // console.log(getDecodedToken())
    let elems = document.querySelectorAll('.datepicker')
    M.Datepicker.init(elems)

    let elems1 = document.querySelectorAll('.dropdown-trigger')
    M.Dropdown.init(elems1)
  }

  handleChange = e => {
    let { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleChangeDrop = e => {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    // postUserInfo(this.state)
    register(
      {
        username: this.state.email,
        password: this.state.password
      },
      { baseUrl: '/api/v1' }
    ).then(() => {
      if (isAuthenticated()) {
        this.props.history.push('/')
      }
      //then push form data here
    })
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <h1>Registration Form</h1>
          <div className="row">
            <form className="col s12" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="input-field col s6">
                  <input
                    type='text'
                    id='firstName'
                    name='firstName'
                    value={this.state.firstName}
                    onChange={this.handleChange}
                  />
                  <label>First Name</label>
                </div>
                <div className="input-field col s6">
                  <input
                    type='text'
                    id='lastName'
                    name='lastName'
                    value={this.state.lastName}
                    onChange={this.handleChange}
                  />
                  <label>Last Name</label>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  <label>Email</label>
                </div>
                <div className="input-field col s6">
                  <input
                    type='text'
                    id='password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  <label>Password</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <input
                    className='datepicker'
                    id='DOB'
                    name='DOB'
                    value={this.state.DOB}
                    onChange={this.handleChange}
                  />
                  <label>Date of Birth</label>
                </div>
                <div className="input-field col s6">
                <label>Current location
                    <select value={this.state.value} onChange={this.handleChangeDrop}>
                      <option value="Wellington">Wellington</option>
                      <option value="Auckland">Auckland</option>
                    </select>
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <label>Languages I speak
                    <select value={this.state.value} onChange={this.handleChangeDrop}>
                      <option value="English">English</option>
                      <option value="French">French</option>
                    </select>
                  </label>
                </div>
                <div className="input-field col s6">
                  <input
                    type='text'
                    id='occupation'
                    name='occupation'
                    value={this.state.occupation}
                    onChange={this.handleChange}
                  />
                  <label>Occupation</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    type='text'
                    id='interests'
                    name='interests'
                    value={this.state.interests}
                    onChange={this.handleChange}
                  />
                  <label>Interests and talents</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <label>
                    How I can support others
                  <div className="row">
                  <div className="col s6">
                    <input
                      type='checkbox'
                      className='filled-in'
                      id='support'
                      name='support'
                      value={this.state.support}
                      onChange={this.handleChange}
                    />
                    <span>Healthcare</span>
                  </div>
                  <div className="col s6">
                  <input
                    type='checkbox'
                    className='filled-in'
                    id='support'
                    name='support'
                    value={this.state.support}
                    onChange={this.handleChange}
                  />
                  <span>Education</span>
                  </div>
                  </div>
                  </label>
                </div>
              </div>
              <br></br>
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    id='bio'
                    name='bio'
                    // className='materialize-textarea'
                    data-length='1000'
                    value={this.state.bio}
                    onChange={this.handleChange}
                  />
                  <label>Bio - a bit about myself</label>
                </div>
              </div>
              <input type='submit' value='Submit' />
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default RegistrationForm
