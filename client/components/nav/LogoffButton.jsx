import React from 'react'

export default function LogoffButton({ handleLogoff }) {
  return (
    <a
      className='waves-effect btn-large btn-round fs-14'
      onClick={handleLogoff}
    >
      Log Off
    </a>
  )
}
