import React from 'react'
import SelectYear from './SelectYear'

export default function RegoProfileForm({
  state,
  handleChange,
  updateUserDetails
}) {
  return (
    <div className='section'>
      <div
        className='profile-container hoverable'
        style={{
          background:
            state.previewProfileUrl &&
            `linear-gradient(
      rgba(153, 153, 153, 0.5),
      rgba(141, 141, 141, 0.5)
    ),
    url(${state.previewProfileUrl})`
        }}
      >
        <p className='center'>My Profile</p>
        <div className='file-field input-field'>
          <div className='btn w-100 z-10'>
            <span>Upload</span>
            <input type='file' name='profileUrl' onChange={handleChange} />
          </div>
          <div className='file-path-wrapper'>
            <input className='file-path validate' type='text' />
          </div>
        </div>
      </div>

      <div className='section'>
        <h5>My Details</h5>
        <div className='input-field'>
          <i className='material-icons prefix form-icon'>account_circle</i>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={state.userDetails.firstName}
            onChange={updateUserDetails}
          />
          <label htmlFor='firstName'>First Name</label>
        </div>
        <div className='input-field'>
          <i className='material-icons prefix form-icon'>account_circle</i>
          <input
            type='text'
            id='lastName'
            name='lastName'
            value={state.userDetails.lastName}
            onChange={updateUserDetails}
          />
          <label htmlFor='lastName'>Last Name</label>
        </div>

        <div className='input-field'>
          <i className='material-icons prefix form-icon'>date_range</i>
          <SelectYear 
          name='DOB' start={-80} end={-18}
          function={updateUserDetails}
          class={'ageSelect'}
          />
        </div>
      </div>

      <div className='divider'></div>

      <div className='section'>
        <h5>Current Location</h5>
        <div className='input-field'>
          <i className='material-icons prefix form-icon'>add_location</i>
          <select
            name="currentCity"
            onChange={updateUserDetails}
            className='locationSelect'
          >
            <option value='' disabled defaultValue>
              Current Location...
            </option>
            <option value='Auckland'>Auckland</option>
            <option value='Christchurch'>Christchurch</option>
            <option value='Dunedin'>Dunedin</option>
            <option value='Hamilton'>Hamilton</option>
            <option value='Invercargill'>Invercargill</option>
            <option value='Nelson'>Nelson</option>
            <option value='Palmerston North'>Palmerston North</option>
            <option value='Wellington'>Wellington</option>
          </select>
        </div>
      </div>

      <div className='divider'></div>

      <div className='section'>
        <h5>Login Details</h5>
        <div className='input-field'>
          <i className='material-icons prefix form-icon'>email</i>
          <input
            type='email'
            id='regoEmail'
            name='email'
            value={state.userDetails.email}
            onChange={updateUserDetails}
          />
          <label htmlFor='regoEmail'>Email</label>
        </div>
        <div className='input-field '>
          <i className='material-icons prefix form-icon'>lock</i>
          <input
            type='password'
            id='regoPassword'
            name='password'
            value={state.password}
            onChange={handleChange}
          />
          <label htmlFor='regoPassword'>Password</label>
        </div>
        <div className='input-field '>
          <i className='material-icons prefix form-icon'>lock</i>
          <input
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            value={state.confirmPassword}
            onChange={handleChange}
          />
          <label htmlFor='confirmPassword'>Confirm Password</label>
        </div>
      </div>
    </div>
  )
}
