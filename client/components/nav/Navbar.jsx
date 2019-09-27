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
          <a href='#' data-target='mobile-demo' className='sidenav-trigger'>
            <i className='material-icons'>menu</i>
          </a>
          <a href='#' className='brand-title'>
            Honotia
          </a>
          <div className='hide-on-med-and-down navItems-wrapper'>
            <div className='manuItems-wrapper'>
              <Link to='/about'>About</Link>
              <a href='sass.html'>Stories</a>
              <IfAuthenticated>
                <Link to='/resources'>Resources</Link>
                <Link to='/connect'>Connect</Link>
              </IfAuthenticated>
            </div>
            <div className='adminBtns-wrapper'>
              <IfAuthenticated>
                <LogoffButton handleLogoff={this.handleLogoff} />
              </IfAuthenticated>
              <IfNotAuthenticated>
                <RegoButton />
                <LoginButton displayLogin={this.displayLogin} />
              </IfNotAuthenticated>
            </div>
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
