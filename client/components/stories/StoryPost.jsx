import React, { Fragment } from 'react'

export default function StoryPost({ story }) {
  return (
    <Fragment>
      <div className='storyPost-container'>
        <h3 className='stories-h3'>{story.title}</h3>
        <p>
          Author: &nbsp;
          <span className='story-authorName'>
            {story.firstName} {story.lastName}
          </span>
        </p>
        <p className='b-font'>{story.story}</p>
        <p className='b-font c-grey'>Date created: {story.dateCreated}</p>
      </div>
      <div className='divider' />
    </Fragment>
  )
}
