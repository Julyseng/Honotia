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
    const userName = isAuthenticated() ? (
      <span>, &nbsp;{currentUser.firstName}</span>
    ) : null

    return (
      <div className='landingPage-container'>
        <div className='center-align'>
          <h2>Kia Ora{userName}!</h2>
          <p>Welcome to Honotia - a place to connect, share, and learn</p>
        </div>

        <div className='row pb-2'>
          <div className='col s12 l4 center-align'>
            <img className='landing-img' src='./1.png' alt='' />
            <h4 className='mt-0'>Connect</h4>
            <p>with your community</p>
          </div>
          <div className='col s12 l4 center-align'>
            <img className='landing-img' src='./2.png' alt='' />
            <h4 className='mt-0'>Share</h4>
            <p>stories, advice, knowledge</p>
          </div>
          <div className='col s12 l4 center-align'>
            <img className='landing-img' src='./3.png' alt='' />
            <h4 className='mt-0'>Learn</h4>
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
