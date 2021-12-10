import React from "react"
import NavBar from "./NavBar"

function Header() {
    return (
        <header>
            <NavBar />
            <div className="header--mainText">Clean Blog</div>
            <h3 className="header--subText">A Blog Theme by Start Bootstrap</h3>
        </header>
    )
}

export default Header