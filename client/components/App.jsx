import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import LandingPage from './LandingPage'
import RegistrationForm from './form/RegistrationForm'
import Navbar from './nav/Navbar'
import AboutPage from './AboutPage'
import Profiles from './Profiles'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Route path='/' component={Navbar} />
        <Route exact path='/' component={LandingPage} />
        <Route path='/registration' component={RegistrationForm} />
        <Route path='/about' component={AboutPage} />
        <Route path='/profiles' component={Profiles} />
      </div>

      <div className='bg_gradient'></div>
    </Router>
  )
}

export default App
