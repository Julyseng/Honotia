import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import LandingPage from './LandingPage'
import RegistrationForm from './form/RegistrationForm'
import LoginFormPage from './form/LoginFormPage'
import Navbar from './nav/Navbar'
import AboutPage from './AboutPage'
import ResourcesPage from './ResourcesPage'
import ConnectPage from './connect/ConnectPage'
import StoriesPage from './stories/StoriesPage'
import UserProfile from './userProfile/UserProfilePage'
import Footer from './Footer'

export default function App() {
  return (
    <Router>
      <div className='container'>
        <Route path='/' component={Navbar} />
        <Route exact path='/' component={LandingPage} />
        <Route path='/registration' component={RegistrationForm} />
        <Route path='/about' component={AboutPage} />
        <Route path='/resources' component={ResourcesPage} />
        <Route path='/connect' component={ConnectPage} />
        <Route path='/user-profile' component={ConnectPage} />
        <Route path='/stories' component={StoriesPage} />
        <Route path='/my-profile' component={UserProfile} />
        <Route path='/login' component={LoginFormPage} />
      </div>
      <Footer />
      <div className='bg_gradient'></div>
    </Router>
  )
}
