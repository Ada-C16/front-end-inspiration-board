import axios from 'axios';
import { useState} from 'react';
import "./Card.css"

const Card = (props) => {
  const [cardsData, setCardsData] = useState([]);
  const [cardMessage, setCardMessage] = useState("");

  const inputCardMessage = (changeEvent) => {
    const messageInput = document.getElementById('message-input');
    if (changeEvent.target.value.length > 0) {
      messageInput.style.borderColor = "grey";
    } else {
      messageInput.style.borderColor = "red";
    }
    setCardMessage(changeEvent.target.value)
  };

  const submitNewCard = (changeEvent) => {
    changeEvent.preventDefault();
    const messageInput = document.getElementById('message-input');
    if (cardMessage.length === 0) {
      messageInput.style.borderColor = "red";
    } else {
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/cards/${props.currentBoard}`, {message: cardMessage})
    .then((response)=> {
        const cards = [...cardsData];
        cards.push(response.data);
        setCardsData(cards);
        setCardMessage("");
      })
    .catch((error) => {console.log('Error:', error);});
    } 
  }
  return (
    <section id ="card-form" className = "form">
      <h2>Create a New Card</h2>
        <form>
        <label>Message</label>
        <input id = "message-input" minLength = {0} maxLength = {40} type="text" value={cardMessage} onChange={inputCardMessage}></input> 
        <p id="preview">Preview: {cardMessage}</p>
        <input className = "submit-button" onClick={submitNewCard} type="submit" value="Make Card"></input>
        </form>
    </section>
  );
};

export default Card;