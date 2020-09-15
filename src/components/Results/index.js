import React from 'react'
import ReactJson from 'react-json-view'

function Results(props) {
    return (
        <>
        <h2>Count: {props.count}</h2>
        <ReactJson src={props.headers} />
        <ReactJson src={props.results} />
        </>
    )
}

export default Results
