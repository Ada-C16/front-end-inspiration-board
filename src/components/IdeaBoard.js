import React from "react";
import "./IdeaBoard.css";
import IdeaCard from "./IdeaCard";

const IdeaBoard = (props) => {
  const { board, onDeleteCard, onAddLike } = props;

  return (
    <div>
      <div className="card-board">Cards for {board.title}</div>
      {board.cards.map((card) => {
        return (
          <IdeaCard
            key={card.card_id}
            card={card}
            onDeleteCard={onDeleteCard}
            onAddLike={onAddLike}
          />
        );
      })}
    </div>
  );
};
export default IdeaBoard;
