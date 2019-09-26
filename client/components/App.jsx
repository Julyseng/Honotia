import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import RegistrationForm from './RegistrationForm'
import Login from './nav/Login'

import Navbar from './nav/Navbar'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <Route path='/registration' component={RegistrationForm} />
        <Route path='/login' component={Login} />
      </div>
    </Router>
  )
}

export default App
