import React from "react";
import { useState } from "react";
import "./CreateANewCard.css";

const CreateANewCard = (props) => {
  const [message, setMessage] = useState("");

<<<<<<< HEAD
  const [message, setMessage] = useState('')
  
  //messageEvent is the Event handler
  const messageEvent = (event) => {
      console.log(event)
      setMessage(event.target.value)
  }; 
  const postCards = (event) =>{

      event.preventDefault(); // prevents webpage from refreshing because it's a single page app
      props.postANewCard(message)
  };

  return (
    // onSubmit and onChange are event listeners 
  <form onSubmit ={postCards} method = ''>  
    <div>
      <h3 className = 'newCard'>Create A New Card</h3>
      <label htmlFor = 'message'>Message</label>
      <input 
        style = {{width: '380px'}}
        type = 'text'
        name = 'message' 
        id = 'message' 
        placeholder = 'type a cute message... 40 characters max'
        onChange = {messageEvent}  
        maxLength = '40' 
        required/>
      <div>
      <input 
        className = 'SubmitButton'
        type = 'submit'
        value='Submit'/> 
      </div>

      <div>
      <button 
        className = 'reset' 
        type = 'reset'>Reset</button>
=======
  const messageEvent = (event) => {
    console.log(event);
    setMessage(event.target.value);
  };
  const postCards = (event) => {
    event.preventDefault(); // prevents webpage from refresh because it's a single page app
    props.postANewCard(message);
  };

  return (
    <form onSubmit={postCards} method="">
      <div>
        <h3 className="newCard">Create A New Card</h3>
        <p></p>
        <label htmlFor="message">Message</label>
        <input
          type="text"
          name="message"
          id="message"
          placeholder="type a cute message..."
          onChange={messageEvent}
          maxLength="40"
          required
        />
        <div>
          <p></p>
          <input className="SubmitButton" type="submit" value="Submit" />
        </div>

        <div>
          <button className="reset" type="reset">
            Reset
          </button>
        </div>
>>>>>>> 1af25dee80774d92236fcd0b991f6afe588903c2
      </div>
    </form>
  );
};

export default CreateANewCard;
