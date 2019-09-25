import React from 'react'

import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Registration from './Registration'


const App = () => {
  return (
    <Router>
      <div className='app'>
      hello world
      <Registration />
      </div>

      <Route path="/registration" component={Registration}/>

  </Router>
  )
}

export default App
