import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import RegistrationForm from './form/RegistrationForm'
import LoginForm from './form/LoginForm'
import Navbar from './nav/Navbar'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <Route path='/registration' component={RegistrationForm} />
        <Route path='/login' component={LoginForm} />
      </div>
    </Router>
  )
}

export default App
