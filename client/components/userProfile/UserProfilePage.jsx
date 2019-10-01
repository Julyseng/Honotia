import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { fetchLoggedInUser } from '../../actions'

class UserProfilePage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchLoggedInUser())
  }

  render() {
    const { profileUrl, firstName, lastName } = this.props.currentUser
    return (
      <Fragment>
        <div className='userProfile-container'>
          <div className='userProfile-nav-container'>
            <img
              src='https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.VsZFTut_yarKVKgSWeXAigHaLH%26pid%3DApi&f=1'
              alt=''
            />
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
  console.log(currentUser)
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(UserProfilePage)
