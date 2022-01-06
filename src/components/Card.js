import React from "react";
import './Card.css';

const Card = ({message}) => {
  return (
    <div className="card">
      <p>{message}</p>
      {/* <Card
        key={card.card_id}
        id={card.card_id}
        board_id={card.board_id}
        message={card.message} */}
      <div className="reactions">
        <span>♥️</span>
        <button>+1</button>
        <button>delete</button>
      </div>
    </div> 
  )
}


export default Card;