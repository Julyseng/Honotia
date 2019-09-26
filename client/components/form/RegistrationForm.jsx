import React, { Component, Fragment } from 'react'
import { postUserInfo } from '../../apiClient'
import M from '../../materialize-js/bin/materialize'

class RegistrationForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      DOB: '',
      location: '',
      languages: '',
      occupation: '',
      interests: '',
      support: '',
      bio: ''
    }
  }

  componentDidMount() {
    let elems = document.querySelectorAll('.datepicker');
    M.Datepicker.init(elems);

    let elems1 = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems1);
    
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
                  <input
                    type='text'
                    id='location'
                    name='location'
                    value={this.state.location}
                    onChange={this.handleChange}
                  />
                  <label className='dropdown-trigger' data-target='dropdown1'>Current location</label>
                  <ul id='dropdown1' className='dropdown-content'>
                    <li>One</li>
                    <li>Two</li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <input
                    type='text'
                    id='languages'
                    name='languages'
                    value={this.state.languages}
                    onChange={this.handleChange}
                  />
                  <label className='dropdown-trigger' data-target='dropdown2'>Languages I speak</label>
                  <ul id='dropdown2' className='dropdown-content'>
                    <li>English</li>
                    <li>French</li>
                  </ul>  
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
              <div className="row">
                <div className="input-field col s12">
                  <input
                    type='text'
                    id='bio'
                    name='bio'
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
