// import axios from "axios";
import React, { useState } from "react";

const Card = (props) => {
  const [cardLikeCount, setCardLikeCount] = useState(0)

  //using this function strictly for testing the currentCard state
  // const handleClick = () => {
  //   console.log('You have selected this card');
  //   console.log('message is "',props.cardMessage, '" at id', props.id);
  //   console.log("current board is:",props.currentBoard.id);
  // }

  const addLike = () => {
    //add an onclickCallBack here maybe?
    //or the patch request itself in here
    
    setCardLikeCount(props.cardLikes + 1)
    //patch request in here
  }

  const handleDeleteCard = () => {
    console.log("bye bye, this card! props.id is:", props.id);
    props.deleteCardCallback(props.id, props.currentBoard);
    //to-dos:
      // update card display to remove card once deleted
      // include logic that allows user to delete a freshly posted card 
        // without having to refresh the board 
  
    //this line below didn't work for updating card display
    // props.updateCardDisplayCallback(props.cardList, props.currentBoard);
  }
  
  // console.log(cardLikeCount)
  return (
    <section>
      <h3>{props.cardMessage}</h3>
      <button onClick={addLike}>🐶 {cardLikeCount}</button>
      <button onClick={handleDeleteCard}>delete card</button>
    </section>
  );
};

export default Card;
