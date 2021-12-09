import React from "react"

// Without React State

// function App() {
//     const thingsArray = ["Things 1", "Things 2"]
//     const thingsItems = thingsArray.map(thing => <p key={thing}>{thing}</p>)

//     function addItem() {
//         const newThingText = `Thing ${thingsArray.length + 1}`
//         thingsArray.push(newThingText)
//         console.log(thingsArray)
//     }

//     return (
//         <div>
//             <button onClick={addItem}>Add Item</button>
//             {thingsItems}
//         </div>
//     )
// }

// With React State

function App() {
    const [things, setThings] = React.useState(["Thing 1", "Thing 2"])

    function addItem() {
        const newThingText = `Thing ${things.length + 1}`
        setThings(prevState => [...prevState, newThingText])
    }

    const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}

export default App