import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import axios from "axios";

const Display = (props) => {

  const [cards, setCards] = useState([]);
  const [cardsComponents, setCardsComponents] = useState([]);

  useEffect(() => {
    setCards(props.cards);
  }, [props])

  useEffect(() => {

  const likeCard = (id) => {
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/cards/${id}/like`)
      .then(() => {
        const newCards = cards.map((card) => {
          if (card.id === id) {
            card.likes_count += 1;
          }
          return card;
        });
        setCards(newCards);
      });
  };

  const deleteCard = (id) => {
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${id}`).then(() => {
      let newCards = [];
      cards.forEach((card) => {
        if (card.id !== id) {
          newCards.push(card);
        }
      });
      setCards(newCards);
    });
  };

  if (cards.card) {
    const cardList = cards.card.map((card) => {
      return (
        <Cards
          id={card.id}
          message={card.message}
          likes_count={card.likes_count}
          likeCard={likeCard}
          deleteCard={deleteCard}
        /> );
    });
    setCardsComponents(cardList);
  }
  }, 
  [cards]);

  return (
    <div>
      <h2>
        {props.title} - {props.owner}
      </h2>
      <div className="cards-display">{cardsComponents}</div>
    </div>
  );
};

export default Display;
