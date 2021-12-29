import React from "react";
import { useState } from "react";

const CreateANewCard = () => {

  const [message, setMessage] = useState('')
  
  const messageEvent = (event) => {
      console.log(event)
      setMessage(event.target.value)
  }; 
  

  return (
  <form onSubmit ={() => {console.log(message)}} method = ''>
    <div>
      <h3>Create A New Card</h3>
      <label htmlFor = 'message'>Message</label>
      <input type = 'text'name = 'message' id = 'message' placeholder = 'type a cute message...'onChange = {messageEvent}  maxLength = "40" required/>
      <div>
      <input type = 'submit'value='Submit'/>
      </div>

      <div>
      <button type = 'reset'>Reset</button>
      </div>
      
    </div>
  </form>
  )
};

export default CreateANewCard;
