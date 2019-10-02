import React from 'react'
import { Link } from 'react-router-dom'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

import RegoButton from './RegoButton'
import LogoffButton from './LogoffButton'

export default function SideNav({ handleLogoff }) {
  return (
    <ul className='sidenav' id='mobile-demo'>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/stories'>Stories</Link>
      </li>
      <IfAuthenticated>
        <li>
          <Link to='/resources' className='exclusive-menuItem'>
            Resources
          </Link>
        </li>
        <li>
          <Link to='/connect' className='exclusive-menuItem'>
            Connect
          </Link>
        </li>
        <li>
          <Link to='/my-profile'>My Profile</Link>
        </li>
        <li>
          <LogoffButton handleLogoff={handleLogoff} />
        </li>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <li>
          <RegoButton />
        </li>
        <li>
          <Link to='/login' className='waves-effect btn-large btn-round fs-14'>
            Login
          </Link>
        </li>
      </IfNotAuthenticated>
    </ul>
  )
}
