import React from 'react'

export default function StoriesAll({ story }) {
    return (
    <div>
        <h4>{story.id}</h4>
        <p>Date created: {story.dateCreated}</p>
        <p>Author: {story.user_id}</p>
        <p>{story.story}</p>
    </div>
    )
} 