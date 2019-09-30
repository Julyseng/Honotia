import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'
import { isAuthenticated } from 'authenticare/client'

import { fetchLoggedInUser } from '../actions'

import LandingPage from './LandingPage'
import RegistrationForm from './form/RegistrationForm'
import Navbar from './nav/Navbar'
import AboutPage from './AboutPage'
import ResourcesPage from './ResourcesPage'
import ConnectPage from './connect/ConnectPage'

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      currentUser: props.currentUser
    }
  }

  componentDidMount() {
    if (isAuthenticated()) {
      this.props.dispatch(fetchLoggedInUser())
    }
  }

  componentWillReceiveProps({ currentUser }) {
    this.setState({ currentUser })
  }

  render() {
    return (
      <Router>
        <div className='container'>
          <Route path='/' component={Navbar} />
          <Route
            exact
            path='/'
            render={props => (
              <LandingPage {...props} currentUser={this.state.currentUser} />
            )}
          />
          <Route path='/registration' component={RegistrationForm} />
          <Route path='/about' component={AboutPage} />
          <Route path='/resources' component={ResourcesPage} />
          <Route path='/connect' component={ConnectPage} />
          <Route path='/user-profile' component={ConnectPage} />
        </div>

        <div className='bg_gradient'></div>
      </Router>
    )
  }
}

function mapStateToProps({ currentUser }) {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(App)
