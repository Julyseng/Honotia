import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import ConnectProfile from './ConnectProfile'
import Pagination from './Pagination'

import { fetchProfiles } from '../../actions'

class ConnectPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProfiles())
  }

  render() {
    const { profiles } = this.props
    return (
      <Fragment>
        <div className='page-header'>
          <h2>Connect</h2>
          <p className='b-font'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis sapiente, voluptatem saepe ducimus at, ratione
            laboriosam neque beatae necessitatibus, possimus ea? Facere saepe
            magni dignissimos libero eaque, exercitationem eos repudiandae.
          </p>
        </div>

        <div className='grid'>
          {profiles.map((profile, i) => (
            <ConnectProfile key={i} profile={profile} />
          ))}
        </div>

        <Pagination />
      </Fragment>
    )
  }
}

function mapStateToProps({ profiles }) {
  return {
    profiles
  }
}

export default connect(mapStateToProps)(ConnectPage)
