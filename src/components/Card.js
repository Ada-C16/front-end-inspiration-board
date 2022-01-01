import axios from 'axios';
import { useState} from 'react';
import "./Card.css"

const Card = (props) => {

  return (
    <section id ="card-form" className = "form">
      <h2>Create a New Card</h2>
        <form>
        <label>Message</label>
        <input id = "message-input" minLength = {0} maxLength = {40} type="text" value={props.cardMessage} onChange={props.inputCardMessage}></input> 
        <p id="preview">Preview: {props.cardMessage}</p>
        <input className = "submit-button" onClick={props.submitNewCard} type="submit" value="Make Card"></input>
        </form>
    </section>
  );
};

export default Card;