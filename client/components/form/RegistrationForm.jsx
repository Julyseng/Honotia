import React, { Component, Fragment } from 'react'
import { register, isAuthenticated, getDecodedToken } from 'authenticare/client'
import M from '../../materialize-js/bin/materialize'

import RefugeeRegForm from './RefugeeRegForm'

import { postUserInfo } from '../../apiClient'

class RegistrationForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userStatus: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      DOB: '',
      location: '',
      languages: '',
      occupation: '',
      support: {},
      bio: '',
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
    // console.log(name, value)
    if (e.target.type == 'checkbox') {
      let support = { ...this.state.support, [value]: e.target.checked }
      if (!e.target.checked) {
        delete support[value]
      }
      value = support
    }

    this.setState({
      [name]: value
    })

  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)
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
    // console.log(this.state)
    return (
      <Fragment>
        <div className="container">
          <h1>Registration Form</h1>

            <form onSubmit={this.handleSubmit}>

              <div className="row">
                <label>Please select a user status:
                  <br></br>
                  <input
                    type="radio"
                    id="newlyArrived"
                    name="userStatus"
                    value="newlyArrived"
                    onChange={this.handleChange}
                  />
                  <span htmlFor="newlyArrived">Newly arrived refugee</span>
                </label>
                <label>
                  <input
                    type="radio"
                    id="formerRefugee"
                    name="userStatus"
                    value="formerRefugee"
                    onChange={this.handleChange}
                  />
                  <span htmlFor="formerRefugee">Former refugee</span>
                </label>
                <label>
                  <input
                    type="radio"
                    id="ally"
                    name="userStatus"
                    value="ally"
                    onChange={this.handleChange}
                  />
                  <span htmlFor="ally">Ally</span>
                </label>
              </div>

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
                      id='emailRegForm'
                      name='email'
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                    <label>Email</label>
                  </div>
                  <div className="input-field col s6">
                    <input
                      type='password'
                      id='passwordRegForm'
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
                    <select
                        name="location"
                        value={this.state.location}
                        onChange={this.handleChange}>
                        <option value="Wellington">Wellington</option>
                        <option value="Auckland">Auckland</option>
                      </select>
                    </label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s6">
                    <label>Languages I speak
                    <select name='languages' value={this.state.languages} onChange={this.handleChange}>
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
                    <label>
                      How I can support others
                  <div className="row">
                        <div className="col s6">
                          <label>
                            <input
                              type='checkbox'
                              className='filled-in'
                              id='supportHealthcare'
                              name='support'
                              value='healthcare'
                              onChange={this.handleChange}
                            />
                            <span>Healthcare</span>
                          </label>
                        </div>
                        <div className="col s6">
                          <label>
                            <input
                              type='checkbox'
                              className='filled-in'
                              id='supportEducation'
                              name='support'
                              value='education'
                              onChange={this.handleChange}
                            />
                            <span>Education</span>
                          </label>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
                <br></br>

                <div className="row">
                  <div className="input-field col s12">
                    <textarea
                      id="bio"
                      name="bio"
                      // className='materialize-textarea'
                      data-length='1000'
                      value={this.state.bio}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="bio">Bio - a bit about myself</label>
                  </div>
                </div>
                <input type='submit' value='Submit' />
              </div>
            </form>

        </div>
        <RefugeeRegForm />
      </Fragment>
    )
  }
}

export default RegistrationForm
