import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import M from '../../materialize-js/bin/materialize'

import SideNav from './SideNav'
import LoginForm from '../form/LoginForm'

export default class Nav extends Component {
  state = {
    displayLogin: true
  }

  componentDidMount() {
    let sidenav = document.querySelectorAll('.sidenav')
    M.Sidenav.init(sidenav)
  }

  handleClick = () => {
    this.setState({ displayLogin: true })
    let form = document.querySelector('.login-container')
    form.classList.toggle('open')
  }

  render() {
    return (
      <Fragment>
        <nav>
          <div className='nav-wrapper'>
            <a href='#' className='brand-logo'>
              Honotia
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
                <a
                  className='waves-effect waves-light btn-large btn-round'
                  onClick={this.handleClick}
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <SideNav />

        {this.state.displayLogin && <LoginForm />}
      </Fragment>
    )
  }
}
