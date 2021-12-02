import React from "react"
import Star from "../images/Star-1.png"

export default function Card(props) {
    //   This starts as JavaScript
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        // This starts JSX
        <section className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.item.coverImg} alt="Cover Image" className="card--image" />
            <div className="card--stats">
                <img src={Star} className="card--star" />
                <span> {props.item.stats.rating}</span>
                <span className="gray"> ({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">${props.item.price}</span> / person</p>
        </section >
    )
}
// export default function Card() {
//     return (
//         <section className="card">
//             <img src={Image} alt="Katy" className="card--image" />
//             <div>
//                 <img src={Star} className="card--star" />
//                 <span> 5.0</span>
//                 <span className="gray"> (6) • </span>
//                 <span className="gray">USA</span>
//             </div>
//             <p>Life lessons with Katie Zaferes</p>
//             <p><span className="bold">From $136</span> / person</p>
//         </section >
//     )
// }