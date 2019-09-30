import React from 'react'

export default function ConnectProfile({ profile }) {
  return (
    <div className='grid-card z-depth-1 hoverable'>
      <div className='grid-card-image'>
        <img src={profile.profileImg} alt='' />
      </div>
      <article className='grid-card-content'>
        <p className='grid-card-title'>{profile.firstName}</p>
        <div className='grid-card-body'>
          <p className='b-font'>{profile.bio}</p>
        </div>
        <div className='grid-card-footer'>
          <span className='tag'>{profile.currentCity}</span>
          <span className='tag'>{profile.occupation}</span>
        </div>
      </article>
    </div>
  )
}





