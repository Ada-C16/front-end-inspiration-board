// import axios from "axios";
import React, { useState } from "react";

const Card = (props) => {
  const [cardLikeCount, setCardLikeCount] = useState(props.cardLikes)
  



  const addOneLike = () => {

    const currentCards = [...props.cardList];
    for (let card of currentCards) {
      if (props.id === card.card_id) {
        setCardLikeCount(card.cardLikes + 1)
        props.addLikeCallback(card.card_id)
      }
  }
  
}

  //deletes card from state AND from backend seperately (to ensure frontend updates w/o waiting for request to backend)
  const handleDeleteCard = () => {
    console.log("bye bye, this card!", props.cardMessage);
    // delete card from cardList (state)
    const currentCards = [...props.cardList];
    for (let card of currentCards) {
      if (props.id === card.card_id) {
        // this gets the index of the card
        const deletedCardIndex = currentCards.indexOf(card);
        // and this removes it from the currentCards list
        currentCards.splice(deletedCardIndex, 1);
      }
    }
    props.setCardList(currentCards);
    
    // delete card from backend
    props.deleteCardCallback(props.id, props.currentBoard);
    
    //to-do for this function:
      // include logic that allows user to delete a freshly posted card 
      // that remains deleted after refreshing the board
  }
  
  // console.log(cardLikeCount)
  return (
    <section>
      <h3>{props.cardMessage}</h3>
      <button onClick={addOneLike}>🐶 {cardLikeCount}</button>
      <button onClick={handleDeleteCard}>delete card</button>
    </section>
  );
};

export default Card;
