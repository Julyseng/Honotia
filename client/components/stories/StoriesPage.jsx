import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { fetchStories } from '../../actions'
import StoryPost from './StoryPost'

class StoriesPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchStories())
  }

  render() {
    const { stories } = this.props
    return (
      <Fragment>
        <div className='page-header'>
          <h2>Stories</h2>
          <p className='b-font'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis sapiente, voluptatem saepe ducimus at, ratione
            laboriosam neque beatae necessitatibus, possimus ea? Facere saepe
            magni dignissimos libero eaque, exercitationem eos repudiandae.
          </p>
        </div>

        <div className='section'>
          {stories.map((story, i) => (
            <StoryPost key={i} story={story} />
          ))}
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps({ stories }) {
  return {
    stories
  }
}

export default connect(mapStateToProps)(StoriesPage)
