import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { isAuthenticated } from 'authenticare/client'

import { fetchLoggedInUser } from '../actions'

class LandingPage extends Component {
  componentDidMount() {
    if (isAuthenticated()) {
      this.props.dispatch(fetchLoggedInUser())
    }
  }

  render() {
    const { currentUser } = this.props
    return (
      <div className='landingPage-container'>
        <div className='center-align'>
          <h2>Kia Ora {isAuthenticated() && currentUser.firstName}!</h2>
          <p>Welcome to Honotia - a place to connect, share, and learn</p>
        </div>

        <div className='row mb-2'>
          <div className='col s12 l4 center-align'>
            <img
              className='landing-img'
              src='./peopleg.png'
              alt=''
            />
            <h4>Connect</h4>
            <p>with your community</p>
          </div>
          <div className='col s12 l4 center-align'>
            <img
              className='landing-img'
              src='./young.png'
              alt=''
            />
            <h4>Share</h4>
            <p>stories, advice, knowledge</p>
          </div>
          <div className='col s12 l4 center-align'>
            <img
              className='landing-img'
              src='./share.png'
              alt=''
            />
            <h4>Learn</h4>
            <p>about your neighbours</p>
          </div>
        </div>

        {!isAuthenticated() && (
          <Link
            to='/registration'
            className='waves-effect waves-light btn-large btn-register'
          >
            Register
          </Link>
        )}
      </div>
    )
  }
}

function mapStateToProps({ currentUser }) {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(LandingPage)
