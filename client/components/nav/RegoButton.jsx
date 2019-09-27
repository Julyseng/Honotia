import React from 'react'
import { Link } from 'react-router-dom'

export default function RegoButton() {
  return (
    <li>
      <Link
        to='/registration'
        className='waves-effect waves-light btn-large btn-round'
      >
        Register
      </Link>
    </li>
  )
}
