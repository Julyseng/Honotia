import React, { Fragment } from 'react'

export default function RegoStatusForm({ state, handleChange }) {
  return (
    <Fragment>
      <div className='row'>
        <div className='input-field col s6'>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={state.userAccount.firstName}
            onChange={handleChange}
          />
          <label>First Name</label>
        </div>
      </div>
      <div className='row'>
        <div className='input-field col s6'>
          <input
            type='text'
            id='lastName'
            name='lastName'
            value={state.userAccount.lastName}
            onChange={handleChange}
          />
          <label>Last Name</label>
        </div>
      </div>
      <div className='row'>
        <div className='input-field col s6'>
          <input
            className='datepicker'
            id='DOB'
            name='DOB'
            value={state.userAccount.DOB}
            onChange={handleChange}
          />
          <label>Date of Birth</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s6">
          <input
            type='email'
            id='emailRegForm'
            name='email'
            value={state.userAccount.email}
            onChange={handleChange}
          />
          <label>Email</label>
        </div>
        <div className="input-field col s6">
          <input
            type='password'
            id='passwordRegForm'
            name='password'
            value={state.userAccount.password}
            onChange={handleChange}
          />
          <label>Password</label>
        </div>
      </div>

      <div className='row'>
        <div className='input-field col s6'>
          <label>
            Current location
            <select
              name='location'
              value={state.userAccount.location}
              onChange={handleChange}
            >
              <option value="" disabled defaultValue>Choose your location</option>
              <option value="Auckland">Auckland</option>
              <option value="Christchurch">Christchurch</option>
              <option value="Dunedin">Dunedin</option>
              <option value="Hamilton">Hamilton</option>
              <option value="Invercargill">Invercargill</option>
              <option value="Nelson">Nelson</option>
              <option value="Palmerston North">Palmerston North</option>
              <option value="Wellington">Wellington</option>
            </select>
          </label>
        </div>
      </div>
      <br></br>
      <br></br>

      <div className="file-field input-field">
        <div className="btn">
          <span>Upload profile picture</span>
          <input type="file" />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button type="submit">Submit</button>
    </Fragment>
  )
}
