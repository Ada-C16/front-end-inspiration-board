import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import Card from "./Card";
import NewCardForm from "./NewCardForm";
import "./CardList.css";

const URL = "https://inspir8tion-board.herokuapp.com/";

const CardList = (props) => {
  const [cards, setCards] = useState([]);
  const [cardsStatus, setCardsStatus] = useState("Loading...");

  // GET boards/<board_id>/cards
  useEffect(() => {
    axios
      .get(`${URL}/boards/${props.selectedBoard.id}/cards`)
      .then((res) => {
        const newCards = res.data.cards.map((card) => {
          return {
            id: card.card_id,
            message: card.message,
            likes_count: card.likes_count,
          };
        });
        setCardsStatus("Loaded");
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.selectedBoard.id ]);

  // POST a card
  const addCardCallback = (message) => {
    const newCardMessage = message;
    axios
      .post(`${URL}/boards/${props.selectedBoard.id}/cards`, newCardMessage)
      .then((res) => {
        const newCard = {
          id: res.data.card_id,
          message: res.data.message,
          likes_count: res.data.likes_count,
        };
        setCards([...cards, newCard]);
      })
      .catch((err) => console.log(err));
  };

  // DELETE /card
  const onCardDelete = (clickedCard) => {
    axios
    .delete(`${URL}/cards/${clickedCard.id}`)
    .then((res) => {
      const newCards = cards.filter((card) => card.id !== clickedCard.id);
      setCards(newCards);
    })
    .catch((err) => console.log(err));
  };

  // +1 Logic
  const onLike = (clickedCard) => {
    axios
    .put(`${URL}/cards/${clickedCard.id}/like`)
    .then((res) => {
      const newCards = cards.map((card) => {
          if (clickedCard.id !== card.id) {
            return card
          } else {
           return {...card, likes_count: card.likes_count + 1}
          }
        });
      setCards(newCards);
    })
    .catch((err) => console.log(err));
  };

  // List of Card components for render
  const getCardsList = cards.map((card) => {
    return (
      <Card
        key={card.id}
        card={card}
        onCardDelete={onCardDelete}
        onLike={onLike}
      />
    );
  });

  return (
      <>
        <h2 className="board-header">"{props.selectedBoard.title}"&nbsp;&nbsp;—&nbsp;&nbsp;{props.selectedBoard.owner}</h2>
        <div className="cards-list-container">
          
          <ul className="cards-container">{getCardsList}</ul>

          <section>
            {props.selectedBoard.id === null ? (null) : (<NewCardForm addCardCallback={addCardCallback}/>)}
          </section>
        </div>
      </>
    );
   

};

CardList.propTypes = {
  selectedBoard: PropTypes.shape({
    id: PropTypes.number.isRequired,
    owner: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardList;