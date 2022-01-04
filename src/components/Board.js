import React, { useState, useEffect } from "react";
import Card from "./Card";

// Will be replaced by API call. Schema from: https://github.com/Ada-C16/full-stack-inspiration-board/blob/main/hints.md

const Board = ({ config, currentCards, setCurrentCards }) => {
  const renderCards = (cards) => {
    return cards.map((card) => (
      <Card
        key={card.card_id}
        message={card.message}
        numLikes={card.likes_count}
        like={() => {
          // TODO: make an API call to update likes
          setCurrentCards((prevCards) => {
            return prevCards.map((prevCard) => {
              if (prevCard.card_id === card.card_id) {
                return { ...card, likes_count: card.likes_count + 1 };
              }
              return prevCard;
            });
          });
        }}
        deleteCard={() => {
          // TODO:  make an API call to delete the card
          setCurrentCards((prevCards) => {
            return prevCards.filter(
              (prevCard) => prevCard.card_id !== card.card_id
            );
          });
        }}
      />
    ));
  };

  return (
    <section>
      <h1>Cards for {config.title}</h1>
      {renderCards(currentCards)}
    </section>
  );
};

export default Board;
