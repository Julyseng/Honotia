import React from 'react'

export default function RegoButton({ displayLogin }) {
  return (
    <a
      className='waves-effect btn-large btn-round'
      onClick={displayLogin}
    >
      Login
    </a>
  )
}
