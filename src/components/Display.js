import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Display.css";

const Display = (props) => {
  const [cards, setCards] = useState([]);
  const [cardsComponents, setCardsComponents] = useState([]);

  useEffect(() => {
    setCards(props.cards);
  }, [props]);

  useEffect(() => {
    const likeCard = (e) => {
      const id = e.target.parentNode.parentNode.getAttribute("id");
      axios
        .put(`${process.env.REACT_APP_BACKEND_URL}/cards/${id}/like`)
        .then(() => {
          const newCards = cards.map((card) => {
            if (card.id === parseInt(id)) {
              card.likes_count += 1;
            }
            return card;
          });
          setCards(newCards);
        })
        .catch(() => {}); // maybe just have it superficially update the number // or do nothing
    };

    const deleteCard = (e) => {
      const id = e.target.parentNode.parentNode.getAttribute("id");
      axios
        .delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${id}`)
        .then(() => {
          const newCards = [];
          cards.forEach((card) => {
            if (card.id !== parseInt(id)) {
              newCards.push(card);
            }
          });
          setCards(newCards); 
        });
    };

    if (cards) {
      const cardComponentList = cards.map((card) => {
        return (
          <div className="card-view" key={card.id} id={card.id}>
            <div class="card-message">{card.message}</div>
            <div className="card-buttons">
              <p class="likes-count">&#9734;{card.likes_count}</p>
              <button className="like" onClick={likeCard}>
                +1
              </button>
              <button className="delete" onClick={deleteCard}>
                delete
              </button>
            </div>
          </div>
        );
      });
      setCardsComponents(cardComponentList);
    }
  }, [cards]);

  return (
    <div className="display-component">
      <h2 className="board-title">
        <span>
          "{props.title}" by {props.owner}
        </span>
      </h2>
      <div className="cards-display">{cardsComponents}</div>
    </div>
  );
};

export default Display;
