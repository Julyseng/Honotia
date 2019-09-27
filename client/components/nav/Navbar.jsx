import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { logOff } from 'authenticare/client'

import M from '../../materialize-js/bin/materialize'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

import SideNav from './SideNav'
import LoginForm from '../form/LoginForm'
import RegoButton from './RegoButton'
import LoginButton from './LoginButton'
import LogoffButton from './LogoffButton'

export default class Nav extends Component {
  state = {
    displayLogin: true
  }

  componentDidMount() {
    let sidenav = document.querySelectorAll('.sidenav')
    M.Sidenav.init(sidenav)
  }

  displayLogin = () => {
    this.setState({ displayLogin: true })
    let form = document.querySelector('.login-container')
    form.classList.toggle('open')
  }

  finishLogin = () => {
    this.setState({ displayLogin: false })
    const currentPath = this.props.history.location.pathname

    if (currentPath != '/') {
      return this.props.history.push('/')
    }
  }

  handleLogoff = () => {
    logOff()

    this.props.history.push('/')
    // TO DO: refresh page to reflect logged off state
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
                <Link to='/about'>About</Link>
              </li>
              <li>
                <a href='sass.html'>Stories</a>
              </li>
              <IfAuthenticated>
                <li>
                  <Link to='/profiles'>Profiles</Link>
                </li>
                <LogoffButton handleLogoff={this.handleLogoff} />
              </IfAuthenticated>
              <IfNotAuthenticated>
                <RegoButton />
                <LoginButton displayLogin={this.displayLogin} />
              </IfNotAuthenticated>
            </ul>
          </div>
        </nav>
        <SideNav
          displayLogin={this.displayLogin}
          handleLogoff={this.handleLogoff}
        />

        {this.state.displayLogin && (
          <LoginForm finishLogin={this.finishLogin} />
        )}
      </Fragment>
    )
  }
}
