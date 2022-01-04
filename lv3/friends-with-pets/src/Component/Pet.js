import React from "react"

function Pet(props) {
    return (
        <div>
            <h3>{props.item.pet.name}</h3>
            <h3>{props.item.pet.breed}</h3>
        </div>
    )
}

export default Pet