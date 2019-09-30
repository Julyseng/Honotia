import React from 'react'

export default function ConnectProfile({ profile }) {
  return (
    <a href='#' class='card'>
      <div class='card-image'>
        <img src={profile.profileImg} alt='' />
      </div>
      <article class='card__content'>
        <h2 class='card__title'>{profile.firstName}</h2>
        <div class='card__body'>
          <p>{profile.bio}</p>
        </div>
        <div class='card__footer'>
          <span class='tag'>{profile.currentCity}</span>
          <span class='tag'>{profile.occupation}</span>
        </div>
      </article>
    </a>
  )
}
