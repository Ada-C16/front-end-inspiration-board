import PropTypes from "prop-types";
import React from "react";
import axios from "axios";
import Card from "./Card";
import "./CardList.css";

const URL = "https://knee-jerk-reaction-inspiration.herokuapp.com";
const CardList = ({ cards, setCards }) => {
  const addLike = (card_id) => {
    axios
      .put(`${URL}/cards/${card_id}/like`)
      .then((response) => {
        const newCards = [...cards];
        for (let card of newCards) {
          if (card.card_id === response.data.card_id) {
            card.likes_count = response.data.likes_count;
            setCards(newCards);
          }
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  const deleteCard = (card_id) => {
    axios
      .delete(`${URL}/cards/${card_id}`)
      .then((response) => {
        const newCards = cards.filter((card) => card.card_id !== card_id);
        setCards(newCards);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  const newCards = cards.map((card) => {
    return (
      <Card
        key={card.card_id}
        card_id={card.card_id}
        likes_count={card.likes_count}
        message={card.message}
        addLike={addLike}
        deleteCard={deleteCard}
      />
    );
  });

  const sortByID = () => {
    const newCards = [...cards].sort((a, b) => a.card_id - b.card_id);
    setCards(newCards);
  };

  const sortByLikes = () => {
    const newCards = [...cards].sort((a, b) => b.likes_count - a.likes_count);
    setCards(newCards);
  };

  const sortByMessage = () => {
    const newCards = [...cards].sort((a, b) => {
      const messageA = a.message.toUpperCase();
      const messageB = b.message.toUpperCase();
      if (messageA < messageB) {
        return -1;
      }
      if (messageA > messageB) {
        return 1;
      }

      return 0;
    });
    setCards(newCards);
  };

  if (cards.length) {
    return (
      <div className="cardlist">
        <div className="sorting-buttons">
          <button onClick={sortByID}>Sort By ID</button>
          <button onClick={sortByLikes}>Sort By 😻</button>
          <button onClick={sortByMessage}>Sort By Message</button>
        </div>
        <div className="card-container">{newCards}</div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      likes_count: PropTypes.number,
      board_id: PropTypes.number,
      card_id: PropTypes.number,
    })
  ).isRequired,
  setCards: PropTypes.func.isRequired,
};

export default CardList;
