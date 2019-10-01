import React from 'react'
import { connect } from 'react-redux'

import SelectYear from './SelectYear'
import CheckboxList from './CheckboxList'

const reasonsForLeaving = {
  conflict: 'War or conflict',
  religious: 'Religious persecution',
  political: 'Political persecution',
  humanRights: 'Human rights violations',
  economic: 'Economic reasons',
  climate: 'Climate change'
}

function RegoRefugeeForm({
  state,
  handleChange,
  updateRefugeeDetails,
  needsAndSupports
}) {
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
            onChange={updateRefugeeDetails}
          />
          <label>Country of origin...</label>
        </div>
      </div>

      <div className='section'>
        <h5>Year of leaving</h5>
        <div className='input-field'>
          <i className='material-icons prefix form-icon'>date_range</i>
          <SelectYear
            name='yearLeft'
            start={-80}
            function={updateRefugeeDetails}
            class={'leavingSelect'}
          />
        </div>
      </div>

      <div className='section'>
        <h5>Reason for leaving</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          quae voluptatibus ratione quo.
        </p>
        <div>
          <CheckboxList
            options={reasonsForLeaving}
            name='reasonForLeaving'
            handleChange={updateRefugeeDetails}
          />
        </div>
      </div>

      <div className='section'>
        <h5>Year of arrival in NZ</h5>
        <div className='input-field'>
          <i className='material-icons prefix form-icon'>date_range</i>
          <SelectYear
            name='yearOfArrival'
            start={-80}
            function={updateRefugeeDetails}
            className='arrivalSelect'
          />
        </div>
      </div>

      <div className='section'>
        <h5>Areas where I need support</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          quae voluptatibus ratione quo.
        </p>
        <div>
          <CheckboxList
            options={needsAndSupports}
            name='needs'
            handleChange={handleChange}
          />
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
    </div>
  )
}

function mapStateToProps({ form }) {
  let needsAndSupports = form.needs.reduce((acc, need) => {
    acc[need.id] = need.needs
    return acc
  }, {})

  return {
    needsAndSupports
  }
}

export default connect(mapStateToProps)(RegoRefugeeForm)
