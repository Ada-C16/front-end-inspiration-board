import React from "react";
import Card from "./Card";

const CardList = ({ cards, deleteCard }) => {
  const displayCard = (card) => {
    return (
      <Card
        key={card.card_id}
        id={card.card_id}
        board_id={card.board_id}
        message={card.message}
        deleteCard={deleteCard}
      />
    );
  };

  return (
    <div className="cardList">
      <h2>Cards For</h2>
      {cards === undefined ? <ul></ul> : <ul>{cards.map(displayCard)}</ul>}
    </div>
  );
};

export default CardList;
