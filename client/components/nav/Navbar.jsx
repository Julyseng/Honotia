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
  }

  hideLogin = () => {
    this.setState({ displayLogin: false })
  }

  finishLogin = () => {
    this.hideLogin()
    const currentPath = this.props.history.location.pathname

    if (currentPath != '/') {
      return this.props.history.push('/')
    }
  }

  handleLogoff = () => {
    logOff()

    this.props.history.push('/')
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
              <Link to='/stories'>Stories</Link>
              <IfAuthenticated>
                <Link to='/resources' className='exclusive-menuItem'>
                  Resources
                </Link>
                <Link to='/connect' className='exclusive-menuItem'>
                  Connect
                </Link>
              </IfAuthenticated>
            </div>
            <div className='adminBtns-wrapper'>
              <IfAuthenticated>
                <Link to='/my-profile' className='icon-profile'>
                  <i className='material-icons '>person_outline</i>
                </Link>
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

        <LoginForm
          finishLogin={this.finishLogin}
          hideLogin={this.hideLogin}
          showLogin={this.state.displayLogin}
        />
      </Fragment>
    )
  }
}
