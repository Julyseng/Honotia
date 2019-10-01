import React from 'react'

export default function StoryPost({ story }) {
  return (
    <div>
      <h2 className='stories-h3'>{story.title}</h2>
      <p>Date created: {story.dateCreated}</p>
      <p>
        Author: {story.firstName} {story.lastName}
      </p>
      <p>{story.story}</p>
      <br />
      <div className='divider' />
    </div>
  )
}
