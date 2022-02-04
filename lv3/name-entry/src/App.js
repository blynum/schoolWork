import React from "react"
import './App.css';

function App() {
  const [formData, setFormData] = React.useState(
    {
      comments: ""
    })

  function handleChange(event) {
    const { name, value } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }
  return (
    <div className="App">
      <h1>Name Entry Assignment</h1>
      <form className="form">
        <textarea
          placeholder="Type Name"
          onChange={handleChange}
          name="comments"
          value={formData.comments}
        />
        {/* <h1>update DOM to show what was put in the input box</h1> */}
        <button className="form--button">Submit</button>
        <ol>
          <li>Jane Doe</li>
        </ol>
      </form>
    </div>
  );
}

export default App;
