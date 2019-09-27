import React from 'react'

export default function RegoButton({ displayLogin }) {
  return (
    <li>
      <a
        className='waves-effect waves-light btn-large btn-round'
        onClick={displayLogin}
      >
        Login
      </a>
    </li>
  )
}
