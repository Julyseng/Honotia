import React from 'react'

export default function LogoffButton({ handleLogoff }) {
  return (
      <a
        className='waves-effect waves-light btn-large btn-round'
        onClick={handleLogoff}
      >
        Log Off
      </a>
  )
}
