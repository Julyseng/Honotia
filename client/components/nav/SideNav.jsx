import React from 'react'

export default function SideNav() {
  return (
    <ul className='sidenav' id='mobile-demo'>
      <li>
        <a href='sass.html'>About</a>
      </li>
      <li>
        <a href='badges.html'>Stories</a>
      </li>
      <li>
        <a className='waves-effect btn'>Register</a>
      </li>
      <li>
        <a className='waves-effect btn'>Login</a>
      </li>
    </ul>
  )
}
