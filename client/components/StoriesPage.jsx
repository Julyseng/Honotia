import React from 'react'
import { connect } from 'react-redux'

import { fetchStories } from '../actions'
import StoriesAll from './StoriesAll'

class StoriesPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchStories())
    }

    render() {
        const { stories } = this.props
        return (
            <React.Fragment>
                <div className='page-header'>
                    <h2>Stories</h2>
                    <p className='b-font'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sapiente, voluptatem saepe ducimus at, ratione laboriosam neque beatae necessitatibus, possimus ea? Facere saepe magni dignissimos libero eaque, exercitationem eos repudiandae.
                    </p>
                    <br />
                    <div className="divider"/>

                    <div className='section'>
                        {stories.map((story, i) => (
                            <StoriesAll key={i} story={story} />
                        ))}
                    </div>

                </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps({ stories }) {
    return {
        stories
    }
}

export default connect(mapStateToProps)(StoriesPage)