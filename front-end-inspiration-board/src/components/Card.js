// import axios from "axios";
import React, { useState } from "react";

const Card = (props) => {
  const [cardLikeCount, setCardLikeCount] = useState(0)

  //using this function strictly for testing the currentCard state
  const handleClick = () => {
    console.log('You have selected this card');
    console.log(`${props.currentBoard.id}`)
  }

  const addLike = () => {
    //add an onclickCallBack here maybe?
    //or the patch request itself in here
    
    
    
    setCardLikeCount(props.cardLikes + 1)
    //patch request in here
  }

  const handleDeleteCard = () => {
    console.log("bye bye, this card!")
  }
  
  console.log(cardLikeCount)
  return (
    <section onClick={handleClick}>
      <h3>{props.cardMessage}</h3>
      <button onClick={addLike}>🐶 {cardLikeCount}</button>
      <button onClick={handleDeleteCard}>delete card</button>
    </section>
  );
};

export default Card;
