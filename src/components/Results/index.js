import React from 'react'
import JSONPretty from 'react-json-pretty'

function Results(props) {
    return (
        <>
        <h2>Count: {props.count}</h2>
        <JSONPretty data={props.headers} />
        <JSONPretty data={props.results} />
        </>
    )
}

export default Results
