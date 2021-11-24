// ReactDOM.render(<h1>Hello, Everyone</h1>, document.getElementById("root"))
// ReactDOM.render(
//     <ul><li>Clean Dishes</li><li>Wash Veggies</li></ul>,
//     document.getElementById("root"))

// **JSX = JavaScript XML**
// const page = (
//     <div>
//         <h1 className="header">This is the JSX Header</h1>
//         <p>This is a paragraph</p>
//     </div>
// )
// ReactDOM.render(
//     page,
//     document.getElementById("root"))

// const navBar = (
//     <nav>
//         <h1>This is the NavBar</h1>
//         <ul>
//             <li>Menu</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )
// ReactDOM.render(
//     navBar,
//     document.getElementById("root")
// )
/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */
// const page = (
//     <div>
//         <header>This is the Header</header>
//         <p>This is a paragraph</p>
//         <ul>
//             <li>Thing 1</li>
//             <li>Thing 2</li>
//             <li>Thing 3</li>
//         </ul>
//     </div>
// )
// ReactDOM.render(
//     page,
//     document.getElementById("root")
// )

// document.getElementById("root").append(page)
//**JSX returns plain JavaScript objects. Rendering turns turns this information into real elements that can be put on the DOM**

// const page = (
//     <div>
//         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" alt="React Logo" stlye="width:10px height:10px;"></img>
//         <h1>Fun Facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was orginially created by Jordan Walke</li>
//             <li>Has well over 100k starts on Github</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// )
// ReactDOM.render(
//     page,
//     document.getElementById("root")
// )

// ** Custom Components ** using functions

// Parent/Child Components

// Child Components
function Header() {
    return (
        <header>
            <nav className="nav-bar">
                <img className="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" alt="React Logo"></img>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header >
    )
}
// Child Components
function Main() {
    return (
        <div className="main">
            <h1>Why I'm excited to Learn React</h1>
            <ol>
                <li>It's a highly hireable skill</li>
                <li>I like puzzle and putting pieces together</li>
                <li>Vanilla JavaScript is tendious</li>
            </ol>
        </div>
    )
}
// Child Components
function Footer() {
    return (
        <footer>
            © 2021 Lynum Development. All rights reserved.
        </footer>
    )
}
// Parent Component
function NewPage() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

ReactDOM.render(
    <NewPage />,
    document.getElementById("root")
)
