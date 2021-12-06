import React from "react"
import Spot from "./Spot"

let vacationSpots = [
    {
        place: "Meridian, Idaho",
        price: 40,
        timeToGo: "Spring"
    }, {
        place: "Cancun",
        price: 900,
        timeToGo: "Winter"
    }, {
        place: "China",
        price: 1200,
        timeToGo: "Fall"
    }, {
        place: "Russia",
        price: 1100,
        timeToGo: "Summer"
    }, {
        place: "Lebanon",
        price: 400,
        timeToGo: "Spring"
    }
]


function VacayList() {
    const vacayArray = vacationSpots.map((spot, index) => {
        return (
            <Spot
                key={index + spot}
                place={spot.place}
                price={spot.price}
                time={spot.timeToGo}
            />
        )
    })

    return (
        <div>
            <h2>{vacayArray}</h2>
        </div>
    )

}

export default VacayList