import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import M from '../../materialize-js/bin/materialize'

import SideNav from './SideNav'

export default class Nav extends Component {
  componentDidMount() {
    let sidenav = document.querySelectorAll('.sidenav')
    M.Sidenav.init(sidenav)
  }

  render() {
    return (
      <Fragment>
        <nav>
          <div className='nav-wrapper'>
            {/* <Link
              to='/'
              className='waves-effect waves-light btn-large'
            >
              Register
            </Link> */}
            <a href='#' className='brand-logo'>
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
                  className='waves-effect waves-light btn-large btn-round'
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  to='/login'
                  className='waves-effect waves-light btn-large btn-round'
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <SideNav />
      </Fragment>
    )
  }
}
