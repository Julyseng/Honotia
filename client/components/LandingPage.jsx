import React from 'react'

export default function LandingPage() {
  return (
    <div>
      <div className='center-align'>
        <h2>Kia Ora!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className='row mb-2'>
        <div className='col s12 m5 l4 center-align'>
          <img
            className='responsive-img'
            src='https://cdn.dribbble.com/users/729829/screenshots/5444723/galshir-connection-illustration.png'
            alt=''
          />
          <h4>Connect</h4>
          <p>with your community</p>
        </div>
        <div className='col s12 m5 l4 center-align'>
          <img
            className='responsive-img'
            src='https://cdn.dribbble.com/users/729829/screenshots/5444723/galshir-connection-illustration.png'
            alt=''
          />
          <h4>Share</h4>
          <p>tips, ideas, stories</p>
        </div>
        <div className='col s12 m5 l4 center-align'>
          <img
            className='responsive-img'
            src='https://cdn.dribbble.com/users/729829/screenshots/5444723/galshir-connection-illustration.png'
            alt=''
          />
          <h4>Learn</h4>
          <p>your neighbours</p>
        </div>
      </div>

      <a class='waves-effect waves-light btn-large btn-register'>Register</a>
    </div>
  )
}
