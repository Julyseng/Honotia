import React, { Fragment } from 'react'

import SelectYear from './SelectYear'

export default function RegoRefugeeForm() {
  return (
    <div className='section'>
      <div className='section'>
        <h5>Country of origin</h5>
        <div className='input-field'>
          <input
            type='text'
            id='originCountry'
            name='originCountry'
            // value={this.state.originCountry}
            // onChange={this.handleChange}
          />
          <label>Country of origin...</label>
        </div>
      </div>

      <div className='section'>
        <h5>Year of leaving</h5>
        <p>
          <div className='input-field'>
              <i className='material-icons prefix form-icon'>date_range</i>
              <SelectYear name='selectYearLeft' start={-80}/>
          </div>
        </p>
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
                name='support'
                value='conflict'
                // onChange={handleChange}
              />
              <span>War or conflict</span>
            </label>
          </p>
          <p>
            <label>
              <input
                type='checkbox'
                name='support'
                value='religious'
                // onChange={handleChange}
              />
              <span>Religious persecution</span>
            </label>
          </p>
          <p>
            <label>
              <input
                type='checkbox'
                name='support'
                value='political'
                // onChange={handleChange}
              />
              <span>Political persecution</span>
            </label>
          </p>
          <p>
            <label>
              <input
                type='checkbox'
                name='support'
                value='humanRights'
                // onChange={handleChange}
              />
              <span>Human rights violations</span>
            </label>
          </p>
          <p>
            <label>
              <input
                type='checkbox'
                name='support'
                value='economic'
                // onChange={handleChange}
              />
              <span>Economic reasons</span>
            </label>
          </p>
          <p>
            <label>
              <input
                type='checkbox'
                name='support'
                value='climate'
                // onChange={handleChange}
              />
              <span>Climate change</span>
            </label>
          </p>
        </div>
      </div>

      <div className='section'>
        <h5>Year of arrival in NZ</h5>
        <p>
          <div className='input-field'>
              <i className='material-icons prefix form-icon'>date_range</i>
              <SelectYear name='selectYearArrival' start={-80}/>
          </div>
        </p>
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
                name='support'
                value='healthcare'
                // onChange={handleChange}
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
                // onChange={handleChange}
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
                // onChange={handleChange}
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
                // onChange={handleChange}
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
                // onChange={handleChange}
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
                // onChange={handleChange}
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
                // onChange={handleChange}
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
                name='support'
                value='healthcare'
                // onChange={handleChange}
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
                // onChange={handleChange}
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
                // onChange={handleChange}
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
                // onChange={handleChange}
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
                // onChange={handleChange}
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
                // onChange={handleChange}
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
                // onChange={handleChange}
              />
              <span>Transport</span>
            </label>
          </p>
        </div>
      </div>
    </div>
  )
}
