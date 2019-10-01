import React from 'react'
import CheckboxList from './CheckboxList'

import { needsAndSupports } from './RegoRefugeeForm'

export default function RegoBioForm({
  state,
  handleChange,
  updateUserDetails,
  handleSelectChangeLanguage,
  languages
}) {
  return (
    <div className='section'>
      <div className='section'>
        <h5>Occupation</h5>
        <div className='input-field'>
          <input
            type='text'
            id='occupation'
            name='occupation'
            value={state.occupation}
            onChange={updateUserDetails}
          />
          <label>Occupation...</label>
        </div>
      </div>

      <div className='section'>
        <h5>Languages</h5>
        <div className='input-field'>
          <select
            multiple
            name='languages'
            onChange={handleSelectChangeLanguage}
            className='languageSelect'
          >
            <option value='' disabled defaultValue>
              Languages I speak...
            </option>
            {languages.map((language, i) => (
              <option key={i} value={language.id}>
                {language.language}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className='section'>
        <h5>Areas where I can offer support</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore alias
          numquam obcaecati iure sapiente earum nisi ab est, ad illo ipsam non
          ut.
        </p>
        <div>
          <CheckboxList
            options={needsAndSupports}
            name='supports'
            handleChange={handleChange}
          />
        </div>
      </div>

      <div className='section'>
        <h5>Bio</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          suscipit quod est, quis sequi quam at totam dolor ipsum mollitia qui
          nihil commodi. Sed officia ipsam ullam ex a eum.
        </p>
        <div className='input-field'>
          <textarea
            id='bio'
            name='bio'
            className='materialize-textarea'
            data-length='1000'
            value={state.bio}
            onChange={updateUserDetails}
          />
          <label htmlFor='bio'>A bit about myself...</label>
        </div>
      </div>
    </div>
  )
}
