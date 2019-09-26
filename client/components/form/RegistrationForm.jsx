import React, { Component, Fragment } from 'react'
import { postUserInfo } from '../../apiClient'

class RegistrationForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      age: 18,
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
        <h1>Registration Form</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>
                Name:
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Age:
                <input
                  type='number'
                  id='age'
                  name='age'
                  value={this.state.age}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Languages:
                <input
                  type='text'
                  id='languages'
                  name='languages'
                  value={this.state.languages}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Current location:
                <input
                  type='text'
                  id='location'
                  name='location'
                  value={this.state.location}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Occupation:
                <input
                  type='text'
                  id='occupation'
                  name='occupation'
                  value={this.state.occupation}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Interests and talents:
                <input
                  type='text'
                  id='interests'
                  name='interests'
                  value={this.state.interests}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                How I can support others:
                <input
                  type='text'
                  id='support'
                  name='support'
                  value={this.state.support}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Email:
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <input type='submit' value='Submit' />
          </form>
        </div>
      </Fragment>
    )
  }
}

export default RegistrationForm
