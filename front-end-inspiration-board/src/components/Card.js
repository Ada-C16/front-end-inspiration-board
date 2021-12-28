import React, { useState } from "react";

const Card = (props) => {
  const [cardLikeCount, setCardLikeCount] = useState(0)

  const addLike = () => {
    setCardLikeCount(props.cardLikes + 1)
  }
  
  console.log(cardLikeCount)
  return (
    <section>
      <h3>{props.cardMessage}</h3>
      <button onclick={addLike}>🐶 {cardLikeCount}</button>
    </section>
  );
};

export default Card;
