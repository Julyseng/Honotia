import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Nav from './Nav'
// import Registration from './Registration'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Nav />
        {/* <Registration /> */}
      </div>

      {/* <Route path='/registration' component={Registration} /> */}
    </Router>
  )
}

export default App
