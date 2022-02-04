import React from "react"
import './App.css';

function App() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    placeOfBirth: "",
    phone: "",
    favoriteFood: "",
    comments: ""
  })

  function handleChange(event) {
    const { name, value } = event.target
    console.log(event.target.name)
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)
  }


  return (
    <div className="form-container">
      <header>Name Badge Assignment</header>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
        <input
          type="text"
          placeholder="Place of Birth"
          onChange={handleChange}
          name="placeOfBirth"
          value={formData.placeOfBirth}
        />
        <input
          type="tel"
          placeholder="Phone"
          onChange={handleChange}
          name="phone"
          value={formData.phone}
        />
        <input
          type="text"
          placeholder="Favorite Food"
          onChange={handleChange}
          name="favoriteFood"
          value={formData.favoriteFood}
        />
        <textarea
          className="form--textArea"
          placeholder="Tell Us About Yourself"
          onChange={handleChange}
          name="comments"
          value={formData.comments}
        />
        <button className="form--button">Submit</button>



      </form>

    </div>
  );
}

export default App;
