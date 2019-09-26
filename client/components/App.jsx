import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import LandingPage from './LandingPage'
import RegistrationForm from './form/RegistrationForm'
import LoginForm from './form/LoginForm'
import Navbar from './nav/Navbar'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <Route exact path='/' component={LandingPage} />
        <Route path='/registration' component={RegistrationForm} />
        <Route path='/login' component={LoginForm} />
      </div>

      <div className='bg_gradient'></div>
    </Router>
  )
}

export default App
