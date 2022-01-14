import React from "react"
import './App.css';

function App() {
  // const thingsArray = ["Thing 1", "Thing 2"]
  // thingsArray.map(function (thing) {
  //   return `<p>${thing}</p>`
  // })
  // const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
  // function addItem() {
  //   const newThingText = `Thing ${thingsArray.length + 1}`
  //   thingsArray.push(newThingText)
  //   console.log(thingsArray)
  // }
  const [things, setThings] = React.useState(["Thing 1", "Thing 2"])

  function addItem() {
    const newThingText = `Thing ${things.length + 1}`
    setThings(prevState => [...prevState, newThingText])
  }

  const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)




  return (
    <div className="App">
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
    </div>
  );
}

export default App;
