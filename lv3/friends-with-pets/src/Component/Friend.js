import React from "react"
import Pet from "./Pet"

function Friend(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            <Pet />
        </div>
    )
}

export default Friend