import React from "react"
import Pet from "./Pet"
// import Pet from "./FriendList"




function Friends(props) {
    const petsList = props.pets.map((pet, index) => {
        return (
            <Pet
                key={index}
                petsName={pet.name}
                petsBreed={pet.breed}
            />
        )
    })

    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.age}</h2>
            <div>
                <h2>{props.name}'s Pets</h2>
                {petsList}
            </div>
        </div>
    )

}

export default Friends

// function PetsList() {
//     const pets = props.pets.map((pet, index) => {
//         return (
//             <Pet
//                 key={index + pet}
//                 name={pet.name}
//                 breed={pet.breed}
//             />
//         )
//     }
//     )

//     return (
//         <div>
//             <h1>{pets}</h1>
//         </div>
//     )
// }
// function PetsList() {
//     const pets = data.map((friend) => friend.pets.map((pet, index) => {
//         return (
//             <Pet
//                 key={index + pet}
//                 name={pet.name}
//                 breed={pet.breed}
//             />
//         )
//     }
//     ))

//     return (
//         <div>
//             <h1>{pets}</h1>
//         </div>
//     )
// }

