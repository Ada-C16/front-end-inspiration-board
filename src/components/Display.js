import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import axios from "axios";

// cards -> props.cards


const Display = (props) => {
  // get request for cards specific to a board
  // boards/id
  // display focuses on arrangement of cards (for loop to
  // + generate all cards for this board)

  const [cards, setCards] = useState([]);
  const [cardsComponents, setCardsComponents] = useState([]);


  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_BACKEND_URL}/boards/${props.id}`)
  //     .then((response) => {
  //       setCards(response.data);
  //     });
  // }, []);
  // useEffect(() => {
  //   //console.log()
  //   setCards(props.cards);
  // }, [props.cards])

  // useEffect((props) => {
  //   setCards(props.cards)
  // }, []);

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
          //setMount(mount + 1);
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
      //setMount(mount + 1);
    });
  };

    //if (mount > 0) {
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
