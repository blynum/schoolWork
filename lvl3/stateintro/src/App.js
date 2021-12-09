import React from "react"

// export default function App() {
//     const [isImportant, setIsImportant] = React.useState("Yes")

//      * Challenge: 
//      * 1. Create a function called `handleClick` that runs
//      *    setIsImportant("No")
//      * 2. add a click event listener to the div.state--value
//      *    that runs `handleClick` when the div is clicked.


//     function handleClick() {
//         setIsImportant("No")
//     }

//     return (
//         <div className="state">
//             <h1 className="state--title">Is state important to know?</h1>
//             <div className="state--value" onClick={handleClick}>
//                 <h1>{isImportant}</h1>
//             </div>
//         </div>
//     )
// }

function App() {
    /**
     * Challenge: Set up state to track our count (initial value is 0)
     */
    //     value, function
    const [count, setCount] = React.useState(0)
    /**
     * Challenge: Create a function called `add` that runs
     * when the + button is clicked. (Can just console.log("add") for now)
     */
    function add() {
        /**
     * Challenge: 
     * See if you can think of a way to add 1 to the count
     * every time the + button is clicked
     */
        // setCount(count + 1)

        /**
             * Note: if you ever need the old value of state
             * to help you determine the new value of state,
             * you should pass a callback function to your
             * state setter function instead of using
             * state directly. This callback function will
             * receive the old value of state as its parameter,
             * which you can then use to determine your new
             * value of state.
             */
        setCount(prevCount => prevCount + 1)
    }

    function subtract() {
        setCount(count - 1)
    }



    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}


export default App