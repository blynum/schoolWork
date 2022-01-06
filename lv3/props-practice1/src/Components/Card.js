import React from "react"
import star from "../images/star.png"

function Card(props) {
    return (
        <div className="card">
            <img src={props.img} />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount})•</span>
                <span className="gray">{props.country}</span>
                <p className="card--title">{props.title}</p>
                <p className="card--price"><span className="bold">From ${props.price}</span>/person</p>
            </div>
        </div>
    )
}

export default Card