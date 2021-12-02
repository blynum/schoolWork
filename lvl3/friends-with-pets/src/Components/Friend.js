import React from "react"
import Pet from "./FriendList"




function Friend(props) {

    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.age}</h2>
        </div>
    )

}

function PetsList() {
    const pets = data.map((friend) => friend.pets.map((pet, index) => {
        return (
            <Pet
                key={index + pet}
                name={pet.name}
                breed={pet.breed}
            />
        )
    }
    ))

    return (
        <div>
            <h1>{pets}</h1>
        </div>
    )
}

export default { Friend, PetsList }