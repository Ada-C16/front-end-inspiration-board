import React from "react";

const Card = ({ message, numLikes, like, deleteCard }) => {
  return (
    <div>
      <p>{message}</p>
      <p>{numLikes}</p>
      <button onClick={like}>+1</button>
      <button onClick={deleteCard}>Delete</button>
    </div>
  );
};

export default Card;
