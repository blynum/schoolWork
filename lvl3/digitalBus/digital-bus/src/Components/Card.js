import React from "react"
import Star from "../images/Star-1.png"

export default function Card(props) {
    //   This starts as JavaScript
    return (
        // This starts JSX
        <section className="card">
            <img src={props.img} alt="Katy" className="card--image" />
            <div>
                <img src={Star} className="card--star" />
                <span> {props.rating}</span>
                <span className="gray"> ({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">${props.price}</span> / person</p>
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