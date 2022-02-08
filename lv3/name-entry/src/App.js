import React from "react"
import './App.css';

function App() {
  const [formData, setFormData] = React.useState(
    {
      name: ""
    })

  function handleChange(event) {
    event.preventDefault()
    const { name, value } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  function handleClick(event) {
    event.preventDefault()
    // document.getElementById("myText").value = "";
    const h1 = document.createElement('h1')
    h1.textContent = formData
    document.getElementsByTagName("body")[0].append(h1)

    console.log(handleClick)
  }
  return (
    <div className="App">
      <h1>Name Entry Assignment</h1>
      <form className="form">
        <input
          id="myText"
          placeholder="Type Name"
          onChange={handleChange}
          name="name"
          value={formData.name}
        />
        {/* <h1>update DOM to show what was put in the input box</h1> */}
        <button onClick={handleClick} className="form--button">Submit</button>
      </form>
    </div>
  );
}

export default App
