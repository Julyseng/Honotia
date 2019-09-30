import React from 'react'

export default function RegoStatusForm() {
  return (
    <div className='section'>
      <h5>My current status...</h5>
      <div className='status-container'>
        <div className='status-wrapper z-depth-2 hoverable'>
          <p>
            Newly arrived refugee
            <span className='status-text'>I would like help</span>
          </p>
        </div>
        <div className='status-wrapper z-depth-2 hoverable'>
          <p>
            Former Refugee
            <span className='status-text'>I can help</span>
          </p>
        </div>
        <div className='status-wrapper z-depth-2 hoverable'>
          <p>
            Ally
            <span className='status-text'>I can help</span>
          </p>
        </div>
      </div>
    </div>
  )
}
