import React from 'react'

export default function StoriesAll({ story }) {
    return (
    <div>
        <h4>{story.id}</h4>
        <p>{story.story}</p>
    </div>
    )
} 