import React, { Component, Fragment } from 'react'
import { register, isAuthenticated, getDecodedToken } from 'authenticare/client'
import M from '../../materialize-js/bin/materialize'

import RefugeeRegForm from './RefugeeRegForm'
import RegoStatusForm from './RegoStatusForm'
import RegoProfileForm from './RegoProfileForm'

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
      bio: ''
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
    return (
      <Fragment>
        <div className='container'>
          {/* <RegoStatusForm /> */}
          <div className='row'>
            <div className='col l8'>
              <form onSubmit={this.handleSubmit}>
                <div className='row'>
                  <RegoProfileForm
                    handleChange={this.handleChange}
                    state={this.state}
                  />

                  {/* <div className='row'>
                    <div className='input-field col s6'>
                      <label>
                        Languages I speak
                        <select
                          name='languages'
                          value={this.state.languages}
                          onChange={this.handleChange}
                        >
                          <option value='English'>English</option>
                          <option value='French'>French</option>
                        </select>
                      </label>
                    </div>
                    <div className='input-field col s6'>
                      <input
                        type='text'
                        id='occupation'
                        name='occupation'
                        value={this.state.occupation}
                        onChange={this.handleChange}
                      />
                      <label>Occupation</label>
                    </div>
                  </div> */}

                  {/* <div className='row'>
                    <div className='input-field col s12'>
                      <label>
                        How I can support others
                        <div className='row'>
                          <div className='col s6'>
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
                          <div className='col s6'>
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
                  </div> */}

                  {/* <div className='row'>
                    <div className='input-field col s12'>
                      <textarea
                        id='bio'
                        name='bio'
                        // className='materialize-textarea'
                        data-length='1000'
                        value={this.state.bio}
                        onChange={this.handleChange}
                      />
                      <label htmlFor='bio'>Bio - a bit about myself</label>
                    </div>
                  </div> */}
                  {/* <input type='submit' value='Submit' /> */}
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <RefugeeRegForm /> */}
      </Fragment>
    )
  }
}

export default RegistrationForm
