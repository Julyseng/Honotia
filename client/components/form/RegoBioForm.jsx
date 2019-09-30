import React from 'react'

export default function RegoBioForm({
  state,
  handleChange,
  handleSelectChange
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
            onChange={handleChange}
          />
          <label>Occupation...</label>
        </div>
      </div>

      <div className='section'>
        <h5>Languages</h5>
        <div className='input-field'>
          <select
            multiple
            name="languages"
            // value={state.languages}
            // defaultValue={[]}
            onChange={handleSelectChange}
            className='languageSelect'
          >
            <option value='' disabled defaultValue>
              Languages I speak...
            </option>
            <option value='English'>English</option>
            <option value='French'>French</option>
            <option value='Water'>Water</option>
          </select>
          {/* <label>Languages I speak</label> */}
        </div>
      </div>

      <div className='section'>
        <h5>Areas where I can offer support</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore alias
          numquam obcaecati iure sapiente earum nisi ab est, ad illo ipsam non
          ut.
        </p>
        {/* How I can support others */}
        <div>
          <p>
            <label>
              <input
                type='checkbox'
                name='support'
                value='healthcare'
                onChange={handleChange}
              />
              <span>Healthcare</span>
            </label>
          </p>
          <p>
            <label>
              <input
                type='checkbox'
                name='support'
                value='education'
                onChange={handleChange}
              />
              <span>Education</span>
            </label>
          </p>
          <p>
            <label>
              <input
                type='checkbox'
                name='support'
                value='housing'
                onChange={handleChange}
              />
              <span>Housing</span>
            </label>
          </p>
          <p>
            <label>
              <input
                type='checkbox'
                name='support'
                value='mentor'
                onChange={handleChange}
              />
              <span>Mentor</span>
            </label>
          </p>
          <p>
            <label>
              <input
                type='checkbox'
                name='support'
                value='employment'
                onChange={handleChange}
              />
              <span>Employment</span>
            </label>
          </p>
          <p>
            <label>
              <input
                type='checkbox'
                name='support'
                value='socialSupport'
                onChange={handleChange}
              />
              <span>Social Support</span>
            </label>
          </p>
          <p>
            <label>
              <input
                type='checkbox'
                name='support'
                value='transport'
                onChange={handleChange}
              />
              <span>Transport</span>
            </label>
          </p>
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
            onChange={handleChange}
          />
          <label htmlFor='bio'>A bit about myself...</label>
        </div>
      </div>
    </div>
  )
}
