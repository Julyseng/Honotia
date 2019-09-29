import React from 'react'
import circle from '../../../public/1.png'
import square from '../../../public/2.png'
import triangle from '../../../public/3.png'

export default function RegoStatusForm() {
  return (
    <div>
      <p>I am a(n)...</p>
      <div className='status-container'>
        <div className='status-wrapper'>
          <img src={circle} alt='' />
          <p>Newly arrived refugee</p>
        </div>
        <div className='status-wrapper'>
          <img src={square} alt='' />
          <p>Former Refugee</p>
        </div>
        <div className='status-wrapper'>
          <img src={triangle} alt='' />
          <p>Ally</p>
        </div>
      </div>
    </div>
  )
}
