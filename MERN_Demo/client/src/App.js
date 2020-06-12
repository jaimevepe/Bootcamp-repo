import React, {useState} from 'react';
import axios from "axios";
import './App.css';

function App() {

  const initialState = {
    fname: ""
  }

  const [formData, setFormData] = useState(initialState) //formDate is basically initialState

  const resetFields = () => {
    setFormData(initialState) // will set the form to the initialstate where strings were empty
  }

  const handleClick = () => {
    console.log("Handle Click is working!")

    axios.get('/test') // from server.js app.get
    .then(response => console.log(response)) // response.data.message will console log just the message
    .catch(err => console.log(err))
    .finally(() => console.log("Http resquest I will ALAWAYS run!"))
  }

  const handleChange = (event) => {
    setFormData({
        ...formData, // spread operator in order to maintain previous data
        [event.target.name] : event.target.value
    })
    console.log(formData)
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    axios.post('/new', formData)
    .then(response => console.log('Response data: ', response.data))
    .catch(err => console.log('Error: ', err))

    resetFields() // to reset state to empty strings
  }
  
  let {fname} = formData // to place into value in the input

  return (
    <div className="App">
      <h1>MERN Demo</h1>
      <button onClick={handleClick}>Click</button>
      

      <form onSubmit={handleSubmit}>

          <label htmlFor="fname">First Name: </label>

          <input type="text" 
              name="fname" 
              id="fname" 
              value={fname}
              onChange={handleChange}/>

          <button type="submit">SUBMIT</button>
          <button type="reset">RESET</button>
    </form>

    </div>
  );
}

export default App;
