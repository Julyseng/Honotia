import React from 'react'
import { Link } from 'react-router-dom'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

import RegoButton from './RegoButton'
import LoginButton from './LoginButton'
import LogoffButton from './LogoffButton'

export default function SideNav({ handleLogoff, displayLogin }) {
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
          <Link to='/my-profile' className='icon-profile'>
            <i className='material-icons '>person_outline</i>
          </Link>
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
          <LoginButton displayLogin={displayLogin} />
        </li>
      </IfNotAuthenticated>
    </ul>
  )
}
