import React from 'react'


export default function SelectYear(props) {
    let start = Number(props.start) || -50
    let end = props.end || 0
    let years = []
    
    var currentYear = new Date().getFullYear()
    var max = currentYear
    for (var year = currentYear+start ; year <= currentYear+end; year++) {
    years.push(year)
    }

    return (
        <select 
        onChange={props.function}
        className={props.class}
        name={props.name} >
            {years.reverse().map((year, i) => <option key={i}>{year}</option>)}
        </select>
    )
}