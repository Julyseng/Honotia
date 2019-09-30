import React from 'react'

export default function CheckboxList({ handleChange, name, options }) {

    return Object.keys(options).map(key => {
        let text = options[key]
        return <p key={key}>
            <label>
                <input
                    type='checkbox'
                    name={name}
                    value={key}
                    onChange={handleChange}
                />
                <span>{text}</span>
            </label>
        </p>
    })
}
