import React from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Card from "./Components/Card"
import data from "./data"
// import image from "./images/image-12.png"



export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            // img={item.coverImg}
            // rating={item.stats.rating}
            // reviewCount={item.stats.reviewCount}
            // location={item.location}
            // title={item.title}
            // price={item.price}
            // openSpots={item.openSpots}
            />
        )
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}