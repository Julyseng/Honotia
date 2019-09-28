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
            value={state.firstName}
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
            value={state.lastName}
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
            value={state.DOB}
            onChange={handleChange}
          />
          <label>Date of Birth</label>
        </div>
      </div>
      <div className='row'>
        <div className='input-field col s6'>
          <label>
            Current location
            <select
              name='location'
              value={state.location}
              onChange={handleChange}
            >
              <option value='Wellington'>Wellington</option>
              <option value='Auckland'>Auckland</option>
              <option value='Hamilton'>Hamilton</option>
              <option value='Tauranga'>Tauranga</option>
            </select>
          </label>
        </div>
      </div>
    </Fragment>
  )
}
