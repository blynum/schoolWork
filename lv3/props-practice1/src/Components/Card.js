import React from "react"
import swimmer from "../images/swimmer.png"
import star from "../images/star.png"

function Card() {
    return (
        <div className="card">
            <img src={swimmer} />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>5.0</span>
                <span className="gray">(6)•</span>
                <span className="gray">USA</span>
                <p className="card--title">Life Lessons with Katie Zaferes</p>
                <p className="card--price"><span className="bold">From $136</span>/person</p>
            </div>
        </div>
    )
}

export default Card