import axios from 'axios';
import { useState} from 'react';
import "./Card.css"

const Card = (props) => {
  const [cardsData, setCardsData] = useState([]);
  const [cardMessage, setCardMessage] = useState("");

  const inputCardMessage = (changeEvent) => {
    setCardMessage(changeEvent.target.value)
  };

  const submitNewCard = (changeEvent) => {
    changeEvent.preventDefault();
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/cards/${props.currentBoard}`, {message: cardMessage})
    .then((response)=> {
        const cards = [...cardsData];
        cards.push(response.data);
        setCardsData(cards);
        setCardMessage("");
      })
    .catch((error) => {console.log('Error:', error);});
    }

  return (
    <section className = "form">
      <h2>Create a New Card</h2>
        <form>
        <label>Message</label>
        <input type="text" value={cardMessage} onChange={inputCardMessage}></input> 
        <p>Preview: {cardMessage}</p>
        <input className = "submit-button" onClick={submitNewCard} type="submit" value="Submit Query"></input>
        </form>
    </section>
  );
};

export default Card;