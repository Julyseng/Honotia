import React from 'react'
import { connect } from 'react-redux'

import { fetchStories } from '../actions'

class StoriesPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchStories())
    }

    render() {
        return (
            <React.Fragment>
                <div className='page-header'>
                    <h2>Stories</h2>
                    <p className='b-font'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sapiente, voluptatem saepe ducimus at, ratione laboriosam neque beatae necessitatibus, possimus ea? Facere saepe magni dignissimos libero eaque, exercitationem eos repudiandae.
                    </p>

                    <div className='section'>
                        <p>Posts go here</p>
                    </div>   

                </div>
            </React.Fragment>
        )
    }
}

export default connect()(StoriesPage)