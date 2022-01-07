import React from "react";

const Card = ({ card, likeCard }) => {
  return (
    <div>
      <li>
        {card.message}. Likes: {card.likes_count}{" "}
        <button onClick={() => likeCard(card)}>Like</button>
      </li>
    </div>
  );
};

export default Card;
