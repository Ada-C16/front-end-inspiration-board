import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import axios from "axios";

const Display = (props) => {
  // get request for cards specific to a board
  // boards/id
  // display focuses on arrangement of cards (for loop to
  // + generate all cards for this board)
  // cards component to structure card (like, delete)
  const [cards, setCards] = useState([]);
  const [cardsComponents, setCardsComponents] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards/{props.id}`)
      .then((response) => {
        setCards(response.data);
      });
  }, []);

  // not check yet
  const likeCard = (id) => {
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/cards/{id}/like`)
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
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/cards/{id}`).then(() => {
      let newCards = [];
      cards.forEach((card) => {
        if (card.id !== id) {
          newCards.push(card);
        }
      });
      setCards(newCards);
    });
  };
  // further thinking
  useEffect(() => {
    const likeCardFunc = () => {
      if (cards.length === 0) {
        return likeCard;
      } else {
        return () => {};
      }
    };

    const deleteCardFunc = () => {
      if (cards.length === 0) {
        return deleteCard;
      } else {
        return () => {};
      }
    };
    const cardList = cards.map((card) => {
      return (
        <Cards
          id={card.id}
          message={card.message}
          likes_count={card.likes_count}
          likeCard={likeCardFunc}
          deleteCard={deleteCardFunc}
        />
      );
    });
    setCardsComponents(cardList);
  }, [cards]);

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
