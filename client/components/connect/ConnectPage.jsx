import React, { Component } from 'react'
import { connect } from 'react-redux'

import ConnectProfile from './ConnectProfile'
import { fetchProfiles } from '../../actions'

class ConnectPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProfiles())
  }

  render() {
    const { profiles } = this.props
    return (
      <div className='grid'>
        {profiles.map((profile, i) => (
          <ConnectProfile key={i} profile={profile} />
        ))}
      </div>
    )
  }
}

function mapStateToProps({ profiles }) {
  return {
    profiles
  }
}

export default connect(mapStateToProps)(ConnectPage)
