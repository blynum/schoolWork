import React from "react"
import Friend from "./Friend"


const data = [
    {
        name: "Ben",
        age: 29,
        pets: [
            {
                name: "spot",
                breed: "tabby"
            }, {
                name: "John Johnson",
                breed: "husky"
            }, {
                name: "Bear the bear",
                breed: "Grizzly"
            }
        ]
    }, {
        name: "Bob",
        age: 31,
        pets: [
            {
                name: "Sally",
                breed: "Australian Shepard"
            }
        ]
    }, {
        name: "Marcus",
        age: 25,
        pets: [
            {
                name: "Indy",
                breed: "Akita"
            }, {
                name: "Anna",
                breed: "persian cat"
            }
        ]
    }, {
        name: "Jacob",
        age: 20,
        pets: [
            {
                name: "fluffy",
                breed: "sphynx cat"
            }, {
                name: "patches",
                breed: "sphynx cat"
            }, {
                name: "tiger",
                breed: "sphynx cat"
            }, {
                name: "oscar",
                breed: "sphynx cat"
            }
        ]
    }

]

export default function FriendsList() {
    const friends = data.map((friend, index) => {
        return (
            <Friend
                key={index + friend}
                name={friend.name}
                age={friend.age}
            />
        )
    })


    return (
        <div>
            <h2>{friends}</h2>
        </div>
    )

}






