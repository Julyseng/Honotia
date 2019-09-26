import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import RegistrationForm from './RegistrationForm'

import Nav from './Nav'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Nav />
        <Route path='/registration' component={RegistrationForm} />
      </div>
    </Router>
  )
}

export default App
