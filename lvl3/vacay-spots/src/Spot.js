import React from "react"


function Spots(props) {
    return (
        <div className="card">
            <h1 className="place">{props.place}</h1>
            <h2 className="price">{props.price}</h2>
            <h3 className="time">{props.time}</h3>
        </div>
    )

}

export default Spots