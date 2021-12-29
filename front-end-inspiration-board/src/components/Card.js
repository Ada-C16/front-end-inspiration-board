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
  
  console.log(cardLikeCount)
  return (
    <section>
      <h3>{props.cardMessage}</h3>
      <button onClick={addLike}>🐶 {cardLikeCount}</button>
    </section>
  );
};

export default Card;
