import React from 'react'

const Thing = (props)=> {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default Thing
