import React from "react"

function Joke(props) {
    return (
        <div>
            {props.setup && <h3> {props.setup}</h3>}
            <p>{props.punchline}</p>
            {props.upvote}
            <hr />
        </div>
    )
}

export default Joke

