import React from "react"
import NavBar from "./NavBar"

function Header() {
    return (
        <div className="header--image">
            <NavBar />
            <header className="header--mainText"><h1>Clean Blog</h1></header>
            <h3 className="header--subText">A Blog Theme by Start Bootstrap</h3>
        </div>
    )
}

export default Header