import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import M from '../materialize-js/bin/materialize'

export default class Nav extends Component {
  componentDidMount() {
    let elems = document.querySelectorAll('.sidenav')
    M.Sidenav.init(elems)
  }

  render() {
    return (
      <Fragment>
        <nav>
          <div className='nav-wrapper container'>
            <a href='#!' className='brand-logo'>
              Journey
            </a>
            <a href='#' data-target='mobile-demo' className='sidenav-trigger'>
              <i className='material-icons'>menu</i>
            </a>
            <ul className='right hide-on-med-and-down'>
              <li>
                <a href='sass.html'>About</a>
              </li>
              <li>
                <a href='sass.html'>Stories</a>
              </li>
              <li>
                <Link
                  to='/registration'
                  className='waves-effect waves-light btn-large'
                >
                  Register
                </Link>
              </li>
              <li>
                <a className='waves-effect waves-light btn-large'>Login</a>
              </li>
            </ul>
          </div>
        </nav>

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
      </Fragment>
    )
  }
}
