import React, { Fragment } from 'react'

export default function RegoBioForm({ state, handleChange }) {
  return (
    <Fragment>
      <div className='row'>
        <div className='input-field col s6'>
          <input
            type='text'
            id='occupation'
            name='occupation'
            value={state.occupation}
            onChange={handleChange}
          />
          <label>Occupation</label>
        </div>
      </div>
      <div className='row'>
        <div className='input-field col s6'>
          <label>
            Languages I speak
            <select
              name='languages'
              value={state.languages}
              onChange={handleChange}
            >
              <option value='English'>English</option>
              <option value='French'>French</option>
            </select>
          </label>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className='row'>
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
                    onChange={handleChange}
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
                    onChange={handleChange}
                  />
                  <span>Education</span>
                </label>
              </div>
            </div>
          </label>
        </div>
      </div>

      <div className='row'>
        <div className='input-field col s12'>
          <textarea
            id='bio'
            name='bio'
            className='materialize-textarea'
            data-length='1000'
            value={state.bio}
            onChange={handleChange}
          />
          <label htmlFor='bio'>Bio - a bit about myself</label>
        </div>
      </div>

      <button className='btn waves-effect waves-light' name='action'>
        Next
        <i className='material-icons right'>send</i>
      </button>
    </Fragment>
  )
}
