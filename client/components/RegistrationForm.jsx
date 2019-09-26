import React, { Component, Fragment } from 'react'
import { postUserInfo } from '../apiClient'

class Registration extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      DOB: null,
      languages: '',
      location: '',
      occupation: '',
      interests: '',
      support: '',
      email: ''
    }
  }

  handleChange = e => {
    let { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    postUserInfo(this.state)
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
                    type='date'
                    id='DOB'
                    name='DOB'
                    value={this.state.DOB}
                    onChange={this.handleChange}
                  />
                  <label>Age:</label>
                </div>
                <div className="input-field col s6">
                  <input
                    type='text'
                    id='location'
                    name='location'
                    value={this.state.location}
                    onChange={this.handleChange}
                  />
                  <label>Current location</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                      type='text'
                      id='languages'
                      name='languages'
                      value={this.state.languages}
                      onChange={this.handleChange}
                    />
                  <label>Languages</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
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
                  <input
                    type='text'
                    id='support'
                    name='support'
                    value={this.state.support}
                    onChange={this.handleChange}
                  />
                  <label>How I can support others</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  <label>Email</label>
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

export default Registration
