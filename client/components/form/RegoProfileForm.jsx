import React, { Fragment } from 'react'

export default function RegoStatusForm({
  state,
  handleChange,
  handleSelectChange
}) {
  return (
    <Fragment>
      {/* <div className='row'> */}
      <div className='profile-container'>
        <p className='center'>My Profile</p>
        <div className='file-field input-field '>
          <div className='btn w-100'>
            <span>Upload</span>
            <input type='file' />
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
            value={state.userAccount.firstName}
            onChange={handleChange}
          />
          <label>First Name</label>
        </div>
        <div className='input-field'>
          <i className='material-icons prefix form-icon'>account_circle</i>
          <input
            type='text'
            id='lastName'
            name='lastName'
            value={state.userAccount.lastName}
            onChange={handleChange}
          />
          <label>Last Name</label>
        </div>

        <div className='input-field'>
          <i className='material-icons prefix form-icon'>date_range</i>
          <input
            className='datepicker'
            id='DOB'
            name='DOB'
            // value={state.userAccount.DOB}
            onChange={handleChange}
          />
          <label>Date of Birth</label>
        </div>
        <div className='input-field'>
          <i className='material-icons prefix form-icon'>add_location</i>
          <select
            // value={}
            onChange={handleSelectChange}
            className='locationSelect'
          >
            <option value='' disabled defaultValue>
              Current Location
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
            id='emailRegForm'
            name='email'
            value={state.userAccount.email}
            onChange={handleChange}
          />
          <label>Email</label>
        </div>
        <div className='input-field '>
          <i className='material-icons prefix form-icon'>lock</i>
          <input
            type='password'
            id='passwordRegForm'
            name='password'
            value={state.userAccount.password}
            onChange={handleChange}
          />
          <label>Password</label>
        </div>
        <div className='input-field '>
          <i className='material-icons prefix form-icon'>lock</i>
          <input
            type='password'
            id='passwordConfirmRegForm'
            name='passwordConfirm'
            value={state.userAccount.password}
            onChange={handleChange}
          />
          <label>Confirm Password</label>
        </div>
      </div>
      {/* </div> */}
    </Fragment>
  )
}
