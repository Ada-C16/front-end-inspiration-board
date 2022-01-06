import React from "react";

const Card = ({ card }) => {
  return (
    <div>
      <li>
        {card.message}. Likes: {card.likes_count} <button>Like</button>
      </li>
    </div>
  );
};

export default Card;
