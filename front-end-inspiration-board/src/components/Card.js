import React, { useState } from "react";

const Card = (props) => {
  const [cardLikeCount, setCardLikeCount] = useState(0)

  const addLike = () => {
    setCardLikeCount(props.cardLikes + 1)
  }

  const handleDeleteCard = () => {
    console.log("bye bye, this card!")
  }
  
  console.log(cardLikeCount)
  return (
    <section>
      <h3>{props.cardMessage}</h3>
      <button onclick={addLike}>🐶 {cardLikeCount}</button>
      <button onClick={handleDeleteCard}>delete card</button>
    </section>
  );
};

export default Card;
