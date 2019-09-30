import React from 'react'

import SelectYear from './SelectYear'

export default function RegoRefugeeForm({
  state,
  handleChange,
  handleSelectChangeArrival
}) {
  console.log(state)
  return (
    <div className='section'>
      <div className='section'>
        <h5>Country of origin</h5>
        <div className='input-field'>
          <input
            type='text'
            id='countryOrigin'
            name='countryOrigin'
            value={state.countryOrigin}
            onChange={handleChange}
          />
          <label>Country of origin...</label>
        </div>
      </div>

      <div className='section'>
        <h5>Year of leaving</h5>
          <div className='input-field'>
              <i className='material-icons prefix form-icon'>date_range</i>
              <SelectYear name='yearLeft' start={-80}/>
          </div>
      </div>

      <div className='section'>
        <h5>Reason for leaving</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          quae voluptatibus ratione quo.
        </p>
        <div>
          <p>
            <label>
              <input
                type='checkbox'
                name='reasonForLeaving'
                value='conflict'
                onChange={handleChange}
              />
              <span>War or conflict</span>
            </label>
          </p>
          <p>
            <label>
              <input
                type='checkbox'
                name='reasonForLeaving'
                value='religious'
                onChange={handleChange}
              />
              <span>Religious persecution</span>
            </label>
          </p>
          <p>
            <label>
              <input
                type='checkbox'
                name='reasonForLeaving'
                value='political'
                onChange={handleChange}
              />
              <span>Political persecution</span>
            </label>
          </p>
          <p>
            <label>
              <input
                type='checkbox'
                name='reasonForLeaving'
                value='humanRights'
                onChange={handleChange}
              />
              <span>Human rights violations</span>
            </label>
          </p>
          <p>
            <label>
              <input
                type='checkbox'
                name='reasonForLeaving'
                value='economic'
                onChange={handleChange}
              />
              <span>Economic reasons</span>
            </label>
          </p>
          <p>
            <label>
              <input
                type='checkbox'
                name='reasonForLeaving'
                value='climate'
                onChange={handleChange}
              />
              <span>Climate change</span>
            </label>
          </p>
        </div>
      </div>

      <div className='section'>
        <h5>Year of arrival in NZ</h5>
          <div className='input-field'>
              <i className='material-icons prefix form-icon'>date_range</i>
              <SelectYear 
              onChange={handleSelectChangeArrival} className="arrivalSelect" 
              name='selectYearArrival' 
              start={-80}/>
          </div>
      </div>

      <div className='section'>
        <h5>Areas where I need support</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          quae voluptatibus ratione quo.
        </p>
        <div>
          <p>
            <label>
              <input
                type='checkbox'
                name='needs'
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
                name='needs'
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
                name='needs'
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
                name='needs'
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
                name='needs'
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
                name='needs'
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
                name='needs'
                value='transport'
                onChange={handleChange}
              />
              <span>Transport</span>
            </label>
          </p>
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
                name='supports'
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
                name='supports'
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
                name='supports'
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
                name='supports'
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
                name='supports'
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
                name='supports'
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
                name='supports'
                value='transport'
                onChange={handleChange}
              />
              <span>Transport</span>
            </label>
          </p>
        </div>
      </div>
    </div>
  )
}
