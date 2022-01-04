import React from "react"
import Pet from "./Pet"
import data from './frienddata'


function Friend(props) {
    console.log(props.pets)
    const petData = data.map(item, index => {
        return (
            <Pet
                key={item + index}
                name={item.pets.name}
                breed={item.pets.breed}
            />
        )
    }
    )

    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            {petData}
        </div>
    )
}

export default Friend