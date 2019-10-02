import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import M from '../../materialize-js/bin/materialize'

import { fetchLoggedInUser } from '../../actions'

class UserProfilePage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchLoggedInUser())
    M.AutoInit()
    M.updateTextFields()
  }

  render() {
    const { profileImg, firstName, lastName } = this.props.currentUser
    return (
      <Fragment>
        <div className='userProfile-container'>
          <div className='userProfile-nav-container'>
            <img src={profileImg} alt='' />
            <p>
              {firstName} {lastName}
            </p>
            <div className='grid-card-footer'>
              <span className='tag'>Wellington</span>
              <span className='tag'>Dentist</span>
            </div>
          </div>

          <div className='userProfile-details-container'>
            <p>Edit your profile</p>
            <div className='fake-input'>
              <span className='fake-input-label'>First Name:</span>
              <span className='fake-input-field'>{firstName}</span>
            </div>
            <div className='fake-input'>
              <span className='fake-input-label'>Last Name:</span>
              <span className='fake-input-field'>{lastName}</span>
            </div>
            <div className='fake-input'>
              <span className='fake-input-label'>Password:</span>
              <span className='fake-input-field'>{firstName}</span>
            </div>
            <div className='fake-input'>
              <span className='fake-input-label'>Confirm Password:</span>
              <span className='fake-input-field'>{firstName}</span>
            </div>
            <div className='fake-input'>
              <span className='fake-input-label'>Bio:</span>
              <span className='fake-input-field'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo nisi quae necessitatibus numquam eaque libero ipsam
                officia beatae, hic et commodi deleniti, vero, nobis dignissimos
                omnis aspernatur molestias odit! Recusandae?
              </span>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps({ currentUser }) {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(UserProfilePage)
