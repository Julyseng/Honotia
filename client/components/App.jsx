import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import RegistrationForm from './RegistrationForm'
import Nav from './Nav'

const App = () => {
  return (
    <Router>
      <Nav />
      <div className='app'>
        <div>
          <Link to='/registration'>Registration</Link>
        </div>
      </div>

      <Route path='/registration' component={RegistrationForm} />
    </Router>
  )
}

export default App
