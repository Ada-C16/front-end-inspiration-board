// import axios from "axios";
import React, { useState } from "react";

const Card = (props) => {
  const [cardLikeCount, setCardLikeCount] = useState(0)

  const addLike = () => {
    //add an onclickCallBack here maybe?
    //or the patch request itself in here
    
    setCardLikeCount(props.cardLikes + 1)
    //patch request in here
  }
  // this function is for debugging purposes
  const showCardInfo = () => {
    console.log({
      key: props.key, 
      id: props.id,
      cardMessage: props.cardMessage,
      cardLike: props.cardLikes,
      cardList: props.cardList,
    });
  }

  //deletes card from state AND from backend seperately (to ensure frontend updates w/o waiting for request to backend)
  const handleDeleteCard = () => {
    console.log("bye bye, this card!", props.cardMessage);
    // delete card from backend
    props.deleteCardCallback(props.id, props.currentBoard);
    // delete card from cardList (state)
    const currentCards = [...props.cardList];
    console.log('Cardslist in deleteCard is', props.cardList);
    for (let card of currentCards) {
      if (props.id === card.card_id) {
        // this gets the index of the card
        const deletedCardIndex = currentCards.indexOf(card);
        // and this removes it from the currentCards list
        currentCards.splice(deletedCardIndex, 1);
      }
    }
    props.setCardList(currentCards);
    
    //to-do for this function:
      // include logic that allows user to delete a freshly posted card 
      // that remains deleted after refreshing the board
  }
  
  // console.log(cardLikeCount)
  return (
    <section onClick={showCardInfo}>
      <h3>{props.cardMessage}</h3>
      <button onClick={addLike}>🐶 {cardLikeCount}</button>
      <button onClick={handleDeleteCard}>delete card</button>
    </section>
  );
};

export default Card;
