import React from 'react'

import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Registration from './Registration'


const App = () => {
  return (
    <Router>
      <div className='app'>
        <nav>
          <div>
            <h1>JOURNEY</h1>
            <ul>
              <li><Link to="/registration">Registration</Link></li>
            </ul>
          </div>
        </nav>
      </div>

      
      <Route path="/registration" component={Registration}/>

  </Router>
  )
}

export default App
