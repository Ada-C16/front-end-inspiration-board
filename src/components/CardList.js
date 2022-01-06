import React from "react";
import Card from "./Card";
import axios from "axios";

// Will be replaced by API call. Schema from: https://github.com/Ada-C16/full-stack-inspiration-board/blob/main/hints.md

const CardList = ({ currentBoard, currentCards, fetchCardsForBoard }) => {
  const backendURL = process.env["REACT_APP_BACKEND_URL"];

  const renderCards = (cards) => {
    return cards.map((card) => (
      <Card
        key={card.id}
        message={card.message}
        numLikes={card.likes_count}
        like={() => {
          // TODO: make an API call to update likes
          // setCurrentCards((prevCards) => {
          //   return prevCards.map((prevCard) => {
          //     if (prevCard.card_id === card.card_id) {
          //       return { ...card, likes_count: card.likes_count + 1 };
          //     }
          //   return prevCard;
          // });
          // });
          axios
            .patch(`${backendURL}/cards/${card.id}`, {
              likes_count: card.likes_count + 1,
            })
            .then((response) => {
              console.log(
                `Success adding like: ${JSON.stringify(response.data)}`
              );
              fetchCardsForBoard();
            })
            .catch((error) => {
              console.error(`Error adding like: ${error}`);
            });
        }}
        deleteCard={() => {
          // TODO:  make an API call to delete the card
          axios
            .delete(`${backendURL}/cards/${card.id}`)
            .then((response) => {
              console.log(
                `Success deleting card: ${JSON.stringify(response.data)}`
              );
              fetchCardsForBoard();
            })
            .catch((error) => {
              console.error(`Error deleting card: ${error}`);
            });
        }}
      />
    ));
  };

  return (
    <section>
      <h2>Cards for {currentBoard.title}</h2>
      {renderCards(currentCards)}
    </section>
  );
};

export default CardList;
