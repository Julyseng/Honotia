import React from 'react'

export default function RegoStatusForm({ setUserStatus }) {
  return (
    <div className='section'>
      <h5>My current status...</h5>
      <div className='status-container'>
        <div
          className='status-wrapper z-depth-2 hoverable waves-effect'
          onClick={() => setUserStatus('NR')}
          tabindex='0'
        >
          <p className='b-font'>
            Newly arrived refugee
            <span className='status-text'>I would like help</span>
          </p>
        </div>
        <div
          className='status-wrapper z-depth-2 hoverable waves-effect'
          onClick={() => setUserStatus('FR')}
          tabindex='0'
        >
          <p className='b-font'>
            Former Refugee
            <span className='status-text'>I can help</span>
          </p>
        </div>
        <div
          className='status-wrapper z-depth-2 hoverable waves-effect'
          onClick={() => setUserStatus('AL')}
          tabindex='0'
        >
          <p className='b-font'>
            Ally
            <span className='status-text'>I can help</span>
          </p>
        </div>
      </div>
    </div>
  )
}
