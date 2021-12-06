import React from "react"
// import friends from "../data"
import Friend from "./Friend"


const friendsData = [
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

function FriendsList() {
    const friendsArray = friendsData.map((friend, index) => {
        return (
            <Friend
                key={index + friend}
                name={friend.name}
                age={friend.age}
                pets={friend.pets}
            />
        )
    })


    return (
        <div>
            <h2>{friendsArray}</h2>
        </div>
    )

}

export default FriendsList




