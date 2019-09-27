import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import RegistrationForm from './form/RegistrationForm'
import Navbar from './nav/Navbar'
import Home from './Home'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/registration' component={RegistrationForm} />
      </div>
    </Router>
  )
}

export default App
